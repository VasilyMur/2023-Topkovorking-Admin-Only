const mongoose = require('mongoose');
const {Schema} = mongoose;
mongoose.Promise = global.Promise;
const mongodbErrorHandler = require('mongoose-mongodb-errors');
const constants = require('../constants');


const spaceSchema = new Schema({
  slug: {
    type: String,
    lowercase: true,
    unique: true,
    trim: true,
    default: Date.now().toString()
  },
  url: {
    type: String,
    lowercase: true,
    trim: true,
  },
  subwaySlug: {
    type: String,
    lowercase: true,
    trim: true,
    default: null
  },
  beautyTypes: [String],
  name: {
    type: String,
    trim: true,
    required: 'Введите название компании',
  },
  type: {
    type: String,
    trim: true,
    default: constants.COMPANY_TYPE_COWORKING,
  },
  city: {
    type: String,
    trim: true,
    lowercase: true,
    required: 'Enter city',
  },
  admin: {
    type: Schema.ObjectId,
    ref: 'User',
    default: null
  },
  publishStatus: {
    type: String,
    trim: true,
    default: constants.COMPANY_PUBLISH_STATUS_PENDING,
  },
  created: {
    type: Number,
    default: Date.now,
  },
  gallery: [
    {
      order: { type: Number },
      image: { type: String, trim: true },
      id: { type: String, trim: true, lowercase: true },
    },
  ],
  offers: [
    {
      title: { type: String, trim: true },
      price: { type: String },
      type: { type: String, trim: true },
      uid: { type: Number },
      _id: false
    },
  ],
  location: {
    type: {
      type: String,
      default: 'Point',
    },
    lat: {type: String, required: true},
    lng: {type: String, required: true},
    address: {
      type: String,
      required: true,
    },
  },
  actions: {
    actionHighlight: {
      expires: {
        type: Number,
        default: Date.now,
      },
    },
    actionLandTop: {
      expires: {
        type: Number,
        default: Date.now,
      },
    },
    actionSideTop: {
      expires: {
        type: Number,
        default: Date.now,
      },
    },
  },
  // Images
  imgMain: {
    url: {
      type: String,
      trim: true,
      default: 'https://files.cloudimages.ru/file/topkovorking/default_570.jpg'
    },
    fileName: {
      type: String,
      trim: true,
    },
    fileId: {
      type: String,
      trim: true,
    }
  },
  imgTitle: {
    url: {
      type: String,
      trim: true,
      default: 'https://files.cloudimages.ru/file/topkovorking/default_160.jpg'
    },
    fileName: {
      type: String,
      trim: true,
    },
    fileId: {
      type: String,
      trim: true,
    }
  },
  description: {
    type: String,
    trim: true,
  },
  phone: {
    code: {
      type: String,
      trim: true,
    },
    number: {
      type: String,
      trim: true,
    },
  },
  country: {
    type: String,
    lowercase: true,
    trim: true,
  },
  priceDay: {
    type: String,
    trim: true,
  },
  subway: {
    hex_color: {
      type: String,
      trim: true,
    },
    id: {
      type: String,
      trim: true,
    },
    lineName: {
      type: String,
      trim: true,
    },
    name: {
      type: String,
      trim: true,
    },
    lat: {
      type: String,
      trim: true,
    },
    lng: {
      type: String,
      trim: true,
    },
    slug: {
      type: String,
      trim: true,
      default: null
    },
    url: {
      type: String,
      trim: true,
      default: null
    },
  },
  schedule: {
    monday: {
      open: { type: Number, default: 1660546800000 },
      close: { type: Number, default: 1660582800000 }
    },
    tuesday: {
      open: { type: Number, default: 1660546800000 },
      close: { type: Number, default: 1660582800000 }
    },
    wednesday: {
      open: { type: Number, default: 1660546800000 },
      close: { type: Number, default: 1660582800000 }
    },
    thursday: {
      open: { type: Number, default: 1660546800000 },
      close: { type: Number, default: 1660582800000 }
    },
    friday: {
      open: { type: Number, default: 1660546800000 },
      close: { type: Number, default: 1660582800000 }
    },
    saturday: {
      open: { type: Number, default: 1660546800000 },
      close: { type: Number, default: 1660582800000 }
    },
    sunday: {
      open: { type: Number, default: 1660546800000 },
      close: { type: Number, default: 1660582800000 }
    },
  },
  tags: [String],
});

spaceSchema.virtual('adminDetails',{
  ref: 'User',
  localField: 'admin',
  foreignField: '_id',
  justOne: true
});

// tell Mongoose to retreive the virtual fields
spaceSchema.set('toObject', { virtuals: true });
spaceSchema.set('toJSON', { virtuals: true });

spaceSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('Space', spaceSchema);
