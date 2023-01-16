const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require('../models/Token');
const Token = mongoose.model('Token');

exports.generateTokens = (payload) => {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: '15d' });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: '30d' });

    return {
        accessToken,
        refreshToken
    }
}

exports.saveToken = async (userId, refreshToken) => {
    const tokenData = await Token.findOne({ user: userId });
    if (tokenData) {
        tokenData.refreshToken = refreshToken;
        await tokenData.save();
        return;
    }

    const token = await Token.create({ user: userId,  refreshToken });
    return token;
}

exports.removeToken = async (refreshToken) => {
    const tokenData = await Token.deleteOne({ refreshToken });
    return tokenData;
}

exports.findToken = async (refreshToken) => {
    const tokenData = await Token.findOne({ refreshToken });
    return tokenData;
}

exports.validateAccessToken = async (token) => {
    try {
        const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
        return userData;
    } catch(err) {
        return null;
    }
}

exports.validateRefreshToken = async (token) => {
    try {
        const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
        return userData;
    } catch(err) {
        return null;
    }
}
