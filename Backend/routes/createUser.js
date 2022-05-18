//use express
const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const config = require('../config/config.json');
const bcrypt = require('bcrypt'); // this package is used for hashing. 

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
router.post('/', async (req,res) => {
	//use the following items to create a new user
	const user = req.body.username;
	const salt = await bcrypt.genSalt();
	const password = await bcrypt.hash(req.body.password,10,salt); //use bcrypt to encrypt the passwords
	const email = req.body.email;
	const mobile = req.body.mobile;
	const permission = 0; //admin is 1, user is 0
	const postcode = req.body.postcode;
	const searchradius = 100; //default search radius
	const active = 1; //user is active (1)

	//establish connection to db, will change to utilize util/database.js instead
	db.getConnection( async (err, connection) => 
	{
		if (err) throw (err)

		//sql search query
		const sqlSearch = "SELECT * FROM users WHERE username = ?"
		const search_query = mysql.format(sqlSearch,[user])

		//sql insert query
		const sqlInsert = "INSERT INTO users (username, password, email, mobile, permission, postcode, searchradius, active) VALUES (?,?,?,?,?,?,?,?)"
		const insert_query = mysql.format(sqlInsert,[user, password, email, mobile, permission, postcode, searchradius, active])

		//start search query
		connection.query (search_query, async (err, result) => 
		{
			if (err) throw (err)
			console.log("-> Search Results")
			console.log(result.length)
			if (result.length != 0) 
			{
				connection.release()
				console.log("-> User already exists")
				res.sendStatus(409) 
			} 
			else 
			{
				//if the user doesn't exist, insert new user
				connection.query (insert_query, (err, result)=> 
				{
					connection.release()
					if (err) throw (err)
					console.log ("--> Created new User")
					console.log(result.insertId)
					res.sendStatus(201)
				})
			}
		})
	})
})

//export router
module.exports = router;