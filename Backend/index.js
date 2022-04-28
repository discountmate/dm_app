//use express
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const errorController = require('./controllers/error');
const session = require('express-session');
const path = require('path');
//const db = require('./util/database');
const config = require('./config/config.json');
const mysql = require('mysql2');
const mongoose = require('mongoose');
const imageModel = require('./models/image')
const multer = require('multer');
const bcrypt = require('bcrypt'); // this package is used for hashing. 
const generateAccessTokens = require("./util/generateAccessToken") //used for login token
require("dotenv").config() //used to access the .env file easily

//routes
const shopRoute = require('./routes/shop');
const itemRoute = require('./routes/item');

//port to listen on
const ports = process.env.PORT || 3000;

//create mysql pool to connect to MySQL db
const db = mysql.createPool({
    connectionLimit: config.connectionLimit,
    host: config.host,
    port: config.port,
    user: config.user,
    password: config.password,
    database: config.database
});

//login modules
app.use(express.json());

//use bodyparser to format into json
app.use(bodyParser.json());

//allow method types and headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
  
//CREATE USER
app.post("/createuser", async (req,res) => {
	//use the following items to create a new user
	const user = req.body.username;
	const password = await bcrypt.hash(req.body.password,10); //use bcrypt to encrypt the passwords
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

//LOGIN (AUTHENTICATE USER)
app.post("/login", (req, res)=> {
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

	
  //Multer to store uploaded images 
const storage =multer.diskStorage({
	destination:(req, file, cb) =>
	{
		cb(null, 'upload')
	},
	filename: (req, file, cb) => {
		cb(null,file.filename + '-'+ Date.now())
	}
	}
);
const upload = multer({storage: storage});
// Get images
app.get('/',(req,res)=>
{
	imageModel.find({}, (err,items)=>{
	if(err)
	{
		console.log(err);  // throw error
		res.status(500).send('There was an error');
	}
	else
	{
		res.render('image',{items: items});
	}
	})
})
//upload images
	app.post('/', upload.single('image'),(req,res,next)=>{
		const object = {
			name: req.body.name,
			description: req.body.description,
			image: 
			{
				data:fstat.readFileSync(path.join(__dirname + '/upload/' + req.file.filename)),
				contentType:'image/png'
			}
		}
		imageModel.create(object,(err,item)=>
		{
			if(err)
			{
				console.log(err);// throw error
			}
			else{
				item.save();
				res.redirect('/home'); // redirect to homepage
			}
		}
		)
	}
)
//endpoints
app.use('/shop', shopRoute);
app.use('/item', itemRoute);

//error handling
app.use(errorController.get404);

app.use(errorController.get500);

//start listening
app.listen(ports, () => console.log('listening...'));

//open browser, uncomment the three lines below for auto open browser
//const open = require('open');
//const res = require('express/lib/response');
//open('http://localhost:3000/');
// password hashing function
async function passHash(password){
	// to use we need to make it async 
	const salt = await bcrypt.genSalt();  // as we are using await we need to make it async and it should be used under async functions only
	// the hash needs two args password adn the salt
	password = await bcrypt.hash(password, salt); 

}