//get MySQL db
const db = require('../util/database');


//model for the item table
module.exports = class item {
    constructor(id, shopid, name, price, sale, discountend) {
        this.id = id;
        this.shopid = shopid;
        this.name = name;
        this.price = price;
        this.sale = sale;
        this.discountend = discountend;
    }

    //db test
    static fetchAll() {
        return db.execute('SELECT * FROM items');
    }
}