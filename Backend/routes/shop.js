//use express
const express = require('express');
const router = express.Router();

//controller
const shopController = require('../controllers/shop');
const shop = require('../models/shop');

//get request
router.get('/', shopController.getAllShops)

//post shop
router.post('/', shopController.postShop);

//put request
router.put('/', shopController.putShop);

//shop get search
router.get('/search', shopController.searchShops);

//export router
module.exports = router;