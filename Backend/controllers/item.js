const Item = require('../models/item'); //item model

//gets all items, used in item model
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

exports.getRecommendedItems = async (req, res, next) => {
    try {
        //try to get all recommended items from model in a json string
        const [recommendedItems] = await Item.getRecommended(req.body.userid);
        res.status(200).json(recommendedItems);
        console.log("ItemController: getRecommendedItems (OK)");
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
            console.log("ItemController: getRecommendedItems (FAIL) -> " + err);
        }
        next(err);
    }
}

//searches for an item by name, used in item model
exports.searchItems = async (req, res, next) => {
    try {
        //try and get item by name, could have multiple responses.
        const [searchItem] = await Item.searchItem(req.body.name);
        res.status(200).json(searchItem);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

//searches for an item by name, used in item model
exports.searchItemFilter = async (req, res, next) => {
    try {
        //try and get item by name, could have multiple responses.
        const [searchItemFilter] = await Item.searchItemFilter(req.body.name);
        res.status(200).json(searchItemFilter);
    }
    catch (err) {
        if (!err.statusCode) { err.statusCode = 500; }
        next(err);
    }
}

//searches for an item by name, used in item model
exports.searchInvoiceHistory = async (req, res, next) => {
    try {
        //try and get item by name, could have multiple responses. 
        const [searchInvoiceHistory] = await Item.searchInvoiceHistory(req.body.dateVal, req.body.userid);
        res.status(200).json(searchInvoiceHistory);
    }
    catch (err) {
        if (!err.statusCode) { err.statusCode = 500; }
        next(err);
    }
}

//adds a new item, used in item model
exports.postItem = async (req, res, next) => {
  try {
      const postResponse = await Item.post(req.body.shopid, req.body.name, req.body.price, req.body.sale, req.body.discountend, req.body.category, req.body.discountprice, req.body.discountpercentage);
      //set default values if null
      res.status(201).json(postResponse);
  } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
}

//changes an item, used in item model
exports.putItem = async (req, res, next) => {
  try {
      const putResponse = await Item.put(req.body.id, req.body.shopid, req.body.name, req.body.price, req.body.sale, req.body.discountend, req.body.category, req.body.discountprice, req.body.discountpercentage);
      res.status(204).json(putResponse);
  } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
}