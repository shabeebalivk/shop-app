class Deal {
    constructor(id, categoryId, title, price, quantity, seller, imageUrl) {
        this.id = id;
        this.categoryId = categoryId;
        this.title = title;
        this.price = price;
        this.quantity = quantity;
        this.seller = seller;
        this.imageUrl = imageUrl
    }
}

export default Deal;