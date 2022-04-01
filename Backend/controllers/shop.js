const Shop = require('../models/shop');

exports.getAllShops = (req, res, next) => {
    //respond with fetchAll from shop model (change later for testing only)
    res.send(Shop.fetchAll());
}