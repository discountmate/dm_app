const Item = require('../models/item');

exports.getAllItems = async (req, res, next) => {
    try {
        //try and get all items from the model in a json string
        const [allItems] = await Item.fetchAll();
        res.status(200).json(allItems);
    } catch (err) {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      }
}

exports.postItem = async (req, res, next) => {
  try {
      const postResponse = await Item.post(req.body.shopid, req.body.name, req.body.price, req.body.sale, req.body.discountend, req.body.category, req.body.discountprice, req.body.discountpercentage);
      res.status(201).json(postResponse);
  } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
}

//add put here
