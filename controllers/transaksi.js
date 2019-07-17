const transaksiModel = require('../model/transaksi');


exports.create = function (req, res) {
  let transaksi = new transaksiModel({
    jenisTransaksi: req.body.jenisTransaksi,
    pilihanKategori: req.body.pilihanKategori,
    nominal: req.body.nominal,
    diskripsi: req.body.diskripsi
  });
  transaksi.save()
    .then(function (subject) {
      res.status(200).json({
        success: true,
        message: 'Transaksi data is created successfully',
        data: subject
      });
    })
    .catch(
        res.status(400).json({
            success: false,
            message: err.message
        })
    );
};

exports.find = function (req, res, next) {
  transaksiModel.find({})
    .then(data => {
      res.status(200).json({
        success: true,
        message: 'all of transaksi data information',
        data: data
      });
    })
    .catch(
        res.status(400).json({
            success: false,
            message: err.message
        })
    );
};

exports.findOne = function (req, res) {
  transaksiModel.findById({ _id: req.params.id }, function (err, data) {
    if (err) {
      res.status(400).json({
        success: false,
        message: err.message
      });
    } else {
      res.status(400).json({
        success: true,
        data: data
      });
    }
  });
};


exports.update = function(req, res){
  transaksiModel.findByIdAndUpdate({_id:req.params.id}, {$set: { saldo: req.body.saldo}})
    .then(function(){
      res.status(200).json({
        success: true,
        data: req.body
      });
    })
    .catch(
        res.status(400).json({
            success: false,
            message: err.message
        })
    );
};


exports.delete = function (req, res, next) {
    transaksiModel.findOneAndDelete({ _id: req.params.id }, function (err) {
      if (err) {
        next(res.status(400).json({
            success: false,
            message: err.message
        }));
      }
      res.status(204).json({
        success: true,
        message: 'Transaksi data is deleted successfully'
      });
    });
  };




