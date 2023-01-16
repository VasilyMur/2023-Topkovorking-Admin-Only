const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const mongodbErrorHandler = require('mongoose-mongodb-errors');

const tokenSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  refreshToken: {
    type: String,
    required: true,
  }
});

// change mongodb ugly errors to a nicer version
tokenSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('Token', tokenSchema);
