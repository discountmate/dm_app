module.exports = class shop {
    constructor(id, shop) {
        this.id = id;
        this.shop = shop;
    }

    static fetchAll() {
        return [
            {
                id: 1,
                shop: 'Woolworths'
            },
            {
                id: 2,
                shop: 'Coles'
            }
        ];
    }
}