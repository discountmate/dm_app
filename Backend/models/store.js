//get MySQL db
const db = require('../util/database');

//model for the shop table
module.exports = class store {
    constructor(id, name, address, postcode, company, gps) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.postcode = postcode;
        this.company = company;
        this.gps = gps;
    }

    //db test
    static fetchAll() {
        return db.execute('SELECT * FROM STORE');
    }

    //post with name location and postcode
    static post(company, postcode, address, gps, name) {
        return db.execute('INSERT INTO STORE (COM_ID, STORE_POSTCODE, STORE_ADDRESS, STORE_GPS, STORE_NAME) VALUES (?, ?, ?, ?, ?)', [company, postcode, address, gps, name]);
    }

    //search for shops by name
    static searchShop(name) {
        return db.execute('SELECT * FROM STORE WHERE STORE_NAME = ?', [name]);
    }

    //update shop
    static put(company, postcode, address, gps, name, id) {
        return db.execute('UPDATE STORE SET COM_ID = ?, STORE_POSTCODE = ?, STORE_ADDRESS = ?, STORE_GPS = ?, STORE_NAME = ? WHERE STORE_ID = ?', [company, postcode, address, gps, name, id]);
    }
}