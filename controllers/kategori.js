const kategoriModel = require('../model/kategori');


exports.create = function (req, res) {
  let kategori = new kategoriModel({
    pemasukan: req.body.pemasukan,
    pengeluaran: req.body.pengeluaran
  });
  kategori.save()
    .then(function (kategori) {
      res.status(200).json({
        success: true,
        message: 'Kategori data is created successfully',
        data: kategori
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
  kategoriModel.find({})
    .then(data => {
      res.status(200).json({
        success: true,
        message: 'all kategori data information',
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
  kategoriModel.findById({ _id: req.params.id }, function (err, data) {
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
  kategoriModel.findByIdAndUpdate({_id:req.params.id}, {$set: { saldo: req.body.saldo}})
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
    kategoriModel.findOneAndDelete({ _id: req.params.id }, function (err) {
      if (err) {
        next(res.status(400).json({
            success: false,
            message: err.message
        }));
      }
      res.status(204).json({
        success: true,
        message: 'Kategori data is deleted successfully'
      });
    });
  };




