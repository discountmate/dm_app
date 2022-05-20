const User = require('../models/user');
const bcrypt = require('bcrypt'); // this package is used for hashing.

//create new user
exports.createUser = async (req, res, next) => {
    try {
        //use password hashing
        const password = await bcrypt.hash(req.body.password,10);
        //call the create user function in user model
        const createuser = await User.createuser(req.body.username, password, req.body.email, req.body.mobile, req.body.postcode);
        res.status(200).json(createuser);
    } catch (err) {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      }
}
//log in
exports.Login = async (req, res, next) => {
try {
    const loginResponse = await User.login(req.body.username, req.body.password);
    res.status(200).json(loginResponse);
} catch (err) {
    console.log("error:", err);
    if (!err.statusCode) {
        err.statusCode = 500;
    }
    next(err);
    }
}