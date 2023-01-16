const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const mongodbErrorHandler = require('mongoose-mongodb-errors');

const customerRequestSchema = new Schema({
  space: {
    type: Schema.ObjectId,
    ref: 'Space'
  },
  spaceName: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  message: {
    type: String,
  },
  created: {
    type: Number,
    default: Date.now,
  },
});

// change mongodb ugly errors to a nicer version
customerRequestSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('CustomerRequest', customerRequestSchema);
