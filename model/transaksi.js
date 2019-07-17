const mongoose = require('mongoose'),
  transaksi = mongoose.Schema,
  autopopulate = require('mongoose-autopopulate'),
  validate = require('mongoose-unique-validator');

var transaksiSchema = new transaksi({
  jenisTransaksi:{
    type: String,
    required: true,
    index: true,
    lowercase: true
  },
  pilihanKategori: {
    type: String,
    required: true,
    index: true,
    lowercase: true
  },
  nominal: {
    type: String,
    required: true,
    index: true,
    lowercase: true
  },
  diskripsi: {
    type: String,
    required: true,
    index: true,
    lowercase: true
  }
},{
  timestamps:true
});

transaksiSchema
  .plugin(validate)
  .plugin(autopopulate);
module.exports = mongoose.model('transaksi',transaksiSchema);