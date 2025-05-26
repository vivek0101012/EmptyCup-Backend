const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  },
  description: {
    type: String,
    required: true
  },
  stats: {
    projects: {
      type: Number,
      required: true
    },
    years: {
      type: Number,
      required: true
    },
    priceTier: {
      type: String,
      required: true,
      enum: ['$', '$$', '$$$', '$$$$']
    }
  },
  contacts: {
    type: [String],
    validate: {
      validator: function(v) {
        return v.length > 0;
      },
      message: 'At least one contact number is required'
    }
  },
  actions: {
    details: {
      type: Boolean,
      default: true
    },
    hide: {
      type: Boolean,
      default: false
    },
    shortlist: {
      type: Boolean,
      default: false
    },
    report: {
      type: Boolean,
      default: false
    }
  }
}, {
  timestamps: true
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;