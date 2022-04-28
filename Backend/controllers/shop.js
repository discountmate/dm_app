const Shop = require('../models/shop');

//gets all shops, used in the shop model.
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

//searches for shops by name, used in the shop model.
exports.searchShops = async (req, res, next) => {
  try {
      //try and get shop by name, could have multiple responses.
      const [searchShop] = await Shop.searchShop(req.body.name);
      res.status(200).json(searchShop);
  } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
}

//adds new shop using body requests, used in the shop model.
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

//updates a shop using name, address and postcode, used in the shop model.
exports.putShop = async (req, res, next) => {
  try {
      
      const putResponse = await Shop.put(req.body.id, req.body.name, req.body.address, req.body.postcode);
      res.status(204).json(putResponse);
  } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
}