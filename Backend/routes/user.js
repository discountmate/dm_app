//use express
const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const config = require('../config/config.json');
const bcrypt = require('bcrypt'); // this package is used for hashing.
const generateAccessTokens = require("../util/generateAccessToken"); //used for login token

//controller
const userController = require('../controllers/user');
const user = require('../models/user');

//create mysql pool to connect to MySQL db
const db = mysql.createPool({
    connectionLimit: config.connectionLimit,
    host: config.host,
    port: config.port,
    user: config.user,
    password: config.password,
    database: config.database
});

//CREATE USER
router.post('/create', userController.createUser);

//LOGIN (AUTHENTICATE USER)
router.post('/login', userController.Login);

//reset password
router.put('/reset', userController.ResetPassword);
//export router
module.exports = router;