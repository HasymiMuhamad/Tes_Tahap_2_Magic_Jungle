const homeModel = require('../model/home');


exports.create = function ( req, res) {
  let home = new homeModel({
    saldo: req.body.saldo,
    pemasukan: req.body.pemasukan,
    pengeluaran: req.body.pengeluaran
  });
  home.save()
    .then(function (homeModel) {
      res.status(200).json({
        success: true,
        message: 'Home data is created successfully',
        data: homeModel
      });
    })
    .catch(
        res.status(400).json({
            success: false,
            message: err.message || 'error'
        })
    );
};

exports.find = function (req, res, next) {
  homeModel.find({})
    .then(data => {
      res.status(200).json({
        success: true,
        message: 'all home data information',
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
  homeModel.findById({ _id: req.params.id }, function (err, data) {
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
  homeModel.findByIdAndUpdate({_id:req.params.id}, {$set: { saldo: req.body.saldo}})
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
    homeModel.findOneAndDelete({ _id: req.params.id }, function (err) {
      if (err) {
        next(res.status(400).json({
            success: false,
            message: err.message
        }));
      }
      res.status(204).json({
        success: true,
        message: 'Home data is deleted successfully'
      });
    });
  };




