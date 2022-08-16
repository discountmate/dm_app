const mongoose = require('mongoose')

const verifiedUserSchema = mongoose.Schema({
    email: String,
})

module.exports = mongoose.model('verified-users', verifiedUserSchema)