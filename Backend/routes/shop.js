//use express
const express = require('express');
const router = express.Router();

//controller
const shopController = require('../controllers/shop');
const itemController = require('../controllers/item');
const shop = require('../models/shop');

//get request
router.get('/', shopController.getAllShops)

//post shop
router.post('/', shopController.postShop);

//put request
router.put('/', shopController.putShop);

//shop search
router.get('/search', shopController.searchShops);

//export router
module.exports = router;