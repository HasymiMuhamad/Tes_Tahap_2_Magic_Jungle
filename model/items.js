const mongoose = require('mongoose'),
  items = mongoose.Schema,
  autopopulate = require('mongoose-autopopulate'),
  validate = require('mongoose-unique-validator');

var itemsSchema = new items({
  namaItems:{
    type: String,
    required: true,
    index: true,
    lowercase: true
  },
  nominalHarga: {
    type: String,
    // required: true,
    index: true,
    lowercase: true
  },
  diskripsiItems: {
    type: String,
    required: true,
    index: true,
    lowercase: true
  }
},{
  timestamps:true
});

itemsSchema
  .plugin(validate)
  .plugin(autopopulate);
module.exports = mongoose.model('items',itemsSchema);
