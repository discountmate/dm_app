//get MySQL db
const db = require('../util/database');


//model for the shop table
module.exports = class shop {
    constructor(id, name, address, postcode) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.postcode = postcode;
    }

    //db test
    static fetchAll() {
        return db.execute('SELECT * FROM shops');
    }

    //post with name location and postcode
    static post(name, address, postcode) {
        return db.execute('INSERT INTO shops (name, address, postcode) VALUES (?, ?, ?)', [name, address, postcode]);
    }

    //search for shops by name
    static searchShop(name) {
        return db.execute('SELECT * FROM shops WHERE name = ?', [name]);
    }
}