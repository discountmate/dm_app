//get MySQL db
const db = require('../util/database');


//model for the shop table
module.exports = class shop {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    //db test
    static fetchAll() {
        return db.execute('SELECT * FROM shops');
    }
}