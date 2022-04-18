const Shop = require('../models/shop');

exports.getAllShops = async (req, res, next) => {
    try {
        //try and get all shops from the model in a json string
        const [allShops] = await Shop.fetchAll();
        res.status(200).json(allShops);
    } catch (err) {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      }
}

exports.postShop = async (req, res, next) => {
    try {
        //try and get all shops from the model in a json string
        const postResponse = await Shop.post(req.body.name, req.body.address, req.body.postcode);
        res.status(201).json(postResponse);
    } catch (err) {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      }
}

//add put here
