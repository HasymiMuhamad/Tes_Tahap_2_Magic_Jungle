const itemsModel = require('../model/items');


exports.create = function (req, res) {
  let items = new itemsModel({
    namaItems: req.body.namaItems,
    nominalHarga: req.body.nominalHarga,
    diskripsiItems: req.body.diskripsiItems
  });
  items.save()
    .then(function (subject) {
      res.status(200).json({
        success: true,
        message: 'Items data is created successfully',
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
  itemsModel.find({})
    .then(data => {
      res.status(200).json({
        success: true,
        message: 'all items data information',
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
  itemsModel.findById({ _id: req.params.id }, function (err, data) {
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
  itemsModel.findByIdAndUpdate({_id:req.params.id}, {$set: { saldo: req.body.saldo}})
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
    itemsModel.findOneAndDelete({ _id: req.params.id }, function (err) {
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