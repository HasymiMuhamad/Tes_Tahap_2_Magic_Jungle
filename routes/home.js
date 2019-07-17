const express = require('express'),
  router = express.Router(),
  homeController = require('../controllers/home');



//CRUD Item
router.post('/item', homeController.create); // register item
router.get('/item', homeController.find); // show all item
router.get('/item/:id', homeController.findOne); // find one item
router.put('/item/:id', homeController.update); // update item
router.delete('/item/:id', homeController.delete); // delete item







module.exports = router;