//model for the user table
module.exports = class user {
    constructor(USER_ID, USER_NAME, USER_PWD, USER_EMAIL, USER_MOBILE, USER_POSTCODE, USER_SEARCH_RADIUS, USER_REG_DTTM) {
        this.id = USER_ID;
        this.username = USER_NAME;
        this.password = USER_PWD;
        this.email = USER_EMAIL;
        this.mobile = USER_MOBILE;
        this.postcode = USER_POSTCODE;
        this.searchradius = USER_SEARCH_RADIUS;
        this.regdate = USER_REG_DTTM;
    }

    //search for items by name
    static searchUser(username) {
        return db.execute('SELECT * FROM USER WHERE USER_ID = ?', [username]);
    }
}