//model for the user table
module.exports = class user {
    constructor(id, username, password, email, mobile, permission, postcode, searchradius, active) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.mobile = mobile;
        this.permission = permission;
        this.postcode = postcode;
        this.searchradius = searchradius;
        this.active = active;
    }   
}