const express = require('express'),
  router = express.Router(),
  kategoriController = require('../controllers/kategori');
  



//CRUD Kategori
router.post('/item', kategoriController.create); // register kategori
router.get('/item', kategoriController.find); // show all kategori
router.get('/item/:id', kategoriController.findOne); // find one kategori
router.put('/item/:id', kategoriController.update); // update kategori
router.delete('/item/:id', kategoriController.delete); // delete kategori



module.exports = router;