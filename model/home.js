const mongoose = require('mongoose'),
  home = mongoose.Schema;
//   autopopulate = require('mongoose-autopopulate'),
//   validate = require('mongoose-unique-validator');

var homeSchema = new home({
  saldo:{
    type: Number,
    required: true,
    index: true,
    lowercase: true
  },
  pemasukan: {
    type: Number,
    required: true,
    index: true,
    lowercase: true
  },
  pengeluaran: {
    type: Number,
    required: true,
    index: true,
    lowercase: true
  }
},{
  timestamps:true
});

// homeSchema
//   .plugin(validate)
//   .plugin(autopopulate);
module.exports = mongoose.model('home',homeSchema);