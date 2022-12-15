//use express
const express = require('express');
const router = express.Router();

//controller
const itemController = require('../controllers/item');

const mysql = require('mysql2'); //used for mysql calls
const config = require('../config/config.json'); //used to get db details
require("dotenv").config(); //used to access the .env file easily

//spawn the python process

//create mysql pool to connect to MySQL db
const db = mysql.createPool({
    connectionLimit: config.connectionLimit,
    host: config.host,
    port: config.port,
    user: config.user,
    password: config.password,
    database: config.database
});

//get request
router.get('/', itemController.getAllItems)

//post shop
router.post('/', itemController.postItem);

//put request
router.put('/', itemController.putItem);

//get recommended items
router.post('/recommended', itemController.getRecommendedItems);

//search get request
router.get('/search?', itemController.searchItems)

//search filter request
router.post('/searchFilter', itemController.searchItemFilter)

//search invoice request
router.post('/searchInvoiceHistory', itemController.searchInvoiceHistory)

//export router
module.exports = router;