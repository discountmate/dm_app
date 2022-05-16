//use express
const express = require('express');
const router = express.Router();
const config = require('../config/config.json');
const mysql = require('mysql2');
const bcrypt = require('bcrypt'); // this package is used for hashing. 
const generateAccessTokens = require("../util/generateAccessToken"); //used for login token

//create mysql pool to connect to MySQL db
const db = mysql.createPool({
    connectionLimit: config.connectionLimit,
    host: config.host,
    port: config.port,
    user: config.user,
    password: config.password,
    database: config.database
});

//LOGIN (AUTHENTICATE USER)
router.post("/", (req, res)=> {
	//user details
	const user = req.body.username
	const password = req.body.password
	//start db connection
	db.getConnection ( async (err, connection)=> 
	{
		if (err) throw (err)
		//sql search query
		const sqlSearch = "Select * from users where username = ?"
		const search_query = mysql.format(sqlSearch,[user])

		//query db
		connection.query (search_query, async (err, result) => 
		{
			connection.release()
			
			if (err) throw (err)
			//if no results
			if (result.length == 0) 
			{
				console.log("-> User does not exist")
				res.sendStatus(404)
			} 
			else 
			{
				//if there is a result
				const hashedPassword = result[0].password

				//get the hashedPassword from result
				if (await bcrypt.compare(password, hashedPassword)) 
				{
					//generate access token
					console.log("--> Login Successful")
					console.log("--> Generating accessToken")
					const accessToken =  generateAccessTokens({user: user})
					res.json ({accessToken: accessToken})
				} 
				else 
				{
					console.log("-> Password Incorrect")
					res.send("Password incorrect!")
				}
			}
		})
	})
})

//export router
module.exports = router;