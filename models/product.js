class Product {
    constructor(id, categoryIds, title, price, quantity, seller, imageUrl) {
        this.id = id;
        this.categoryIds = categoryIds;
        this.title = title;
        this.price = price;
        this.quantity = quantity;
        this.seller = seller;
        this.imageUrl = imageUrl
    }
}

export default Product;