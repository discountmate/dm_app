const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email: String,
    name: String,
    code: Number,
})

module.exports = mongoose.model('users', userSchema)