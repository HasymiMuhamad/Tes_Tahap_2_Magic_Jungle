const mongoose = require('mongoose'),
  kategori = mongoose.Schema,
  autopopulate = require('mongoose-autopopulate'),
  validate = require('mongoose-unique-validator');

var kategoriSchema = new kategori({
  pemasukan: {
    type: String,
    required: true,
    index: true,
    lowercase: true
  },
  pengeluaran: {
    type: String,
    required: true,
    index: true,
    lowercase: true
  }
},{
  timestamps:true
});

kategoriSchema
  .plugin(validate)
  .plugin(autopopulate);
module.exports = mongoose.model('kategori',kategoriSchema);