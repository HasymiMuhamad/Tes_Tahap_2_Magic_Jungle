const express = require('express'),
  router = express.Router(),
  transaksiController = require('../controllers/transaksi');



//CRUD Transaksi
router.post('/item', transaksiController.create);
router.get('/item', transaksiController.find);
router.get('/item/:id', transaksiController.findOne);
router.put('/item/:id', transaksiController.update);
router.delete('/item/:id', transaksiController.delete);



module.exports = router;