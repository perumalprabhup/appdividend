const mongoose = require('mongoose');
const schema = mongoose.Schema;

let Business = new schema({
  person_name: {
    type: String
  },
  business_name: {
    type: String
  },
  business_gst_number: {
    type: Number
  }
}, {
  collection: 'business'
});

module.exports = mongoose.model('Business', Business);
