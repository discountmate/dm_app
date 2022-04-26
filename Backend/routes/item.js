//use express
const express = require('express');
const router = express.Router();

//controller
const itemController = require('../controllers/item');
const item = require('../models/item');

//get request
router.get('/', itemController.getAllItems)

//post shop
router.post('/', itemController.postItem);

//put request
router.put('/', itemController.putItem);
//export router
module.exports = router;