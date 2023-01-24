const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const tokenHandler = require('./token-handler');
const mailHandler = require('./mail-handler');
require('../models/User');
const User = mongoose.model('User');
const UserDto = require('../dtos/user-dto');
const ApiError = require('../exceptions/api-error');

exports.register = async (email, password) => {
  const endUser = await User.findOne({ email });

  if (endUser) {
    throw ApiError.BadRequest(`Email ${email} уже зарегистрирован!`);
  }
  
  const hashPassword = bcrypt.hashSync(password, 7);
  const activationLink = uuidv4();
  const userNew = new User({ email, password: hashPassword, activationLink });
  await userNew.save();

  const resetURL = `${
    process.env.NODE_ENV === 'development'
      ? process.env.HOST_URL_DEV
      : process.env.HOST_URL_PROD
  }/api/activate/${activationLink}`;

  await mailHandler.send({
    user: userNew,
    subject: 'Логин и временный пароль',
    resetURL,
    filename: 'register',
  });

  const userDto = new UserDto(userNew);
  const tokens = tokenHandler.generateTokens({ ...userDto });

  await tokenHandler.saveToken(UserDto.id, tokens.refreshToken);

  return { ...tokens, user: userDto };
}

// Activate link
exports.activate = async (activationLink) => {
  const endUser = await User.findOne({ activationLink });
  if (!endUser) {
    throw ApiError.BadRequest(`Некорректная ссылка активации!`);
  }

  endUser.isActivated = true;
  await endUser.save();
}

exports.login = async (email, password) => {
  const endUser = await User.findOne({ email });

  if (!endUser) {
    throw ApiError.BadRequest(`Пользователь с таким email не найден!`);
  }

  const passwordsAreSame = await bcrypt.compare(password, endUser.password);
  if (!passwordsAreSame) {
    throw ApiError.BadRequest(`Неверный пароль!`);
  }

  const userDto = new UserDto(endUser);
  const tokens = tokenHandler.generateTokens({ ...userDto });

  await tokenHandler.saveToken(UserDto.id, tokens.refreshToken);
  return { ...tokens, user: userDto };
}

exports.logout = async (refreshToken) => {
  console.log('logOut >>>> ')
  // const testTokens = await Token.find();
  // console.log('Token remove >>>>>>>>>> ', testTokens)
  const token = await tokenHandler.removeToken(refreshToken);
  return token;
}

exports.refresh = async (refreshToken) => {
  console.log('refreshing token >>>> ', refreshToken)
  if(!refreshToken) {
    console.log('1 --- error refresh')
    throw ApiError.UnauthorizedError();
  }

  const userData = await tokenHandler.validateRefreshToken(refreshToken);
  const tokenFromDb = await tokenHandler.findToken(refreshToken);
  // console.log('1) refresh handler userData check >>>> ', userData)
  // console.log('2) refresh handler tokenFromDb check >>>> ', tokenFromDb)
  if (!userData || !tokenFromDb) {
    console.log('2 --- error !userData || !tokenFromDb')
    throw ApiError.UnauthorizedError();
  }

  // >>> DB ____ID или id!!??? 
  const endUser = await User.findById(userData.id);

  const userDto = new UserDto(endUser);
  const tokens = tokenHandler.generateTokens({ ...userDto });
  // console.log('3) GENERATED NEW!!!!!!!!!!!!!!!!!!!!!! >>>> ', tokens.refreshToken)
  await tokenHandler.saveToken(UserDto.id, tokens.refreshToken);
  return { ...tokens, user: userDto };
}


exports.getAllUsers = async () => {
  const users = await User.find();
  return users;
}
