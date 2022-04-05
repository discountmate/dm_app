const Shop = require('../models/shop');

exports.getAllShops = async (req, res, next) => {
    try {
        //try and get all shops from the model in a json string
        const [allShops] = await Shop.fetchAll();
        res.status(200).json(allShops);
    } catch {
        //need error handling here
    }
}
