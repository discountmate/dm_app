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
