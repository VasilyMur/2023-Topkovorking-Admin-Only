const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const mongodbErrorHandler = require('mongoose-mongodb-errors');

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: 'Введите email',
  },
  password: {
    type: String,
    required: true,
  },
  isActivated: {
    type: Boolean,
    default: false,
  },
  canCreate: {
    type: Boolean,
    default: false,
  },
  activationLink: {
    type: String
  },
  role: {
    type: String,
    default: 'user'
  }
});

// change mongodb ugly errors to a nicer version
userSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('User', userSchema);
