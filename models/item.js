const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    default: 1
  }
});

module.exports = mongoose.model('Item', ItemSchema);
