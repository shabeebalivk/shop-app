import Category from '../models/category'
import Product from '../models/product'
import Deal from '../models/deals'
import Shop from '../models/shops'


export const CATEGORIES = [
    new Category('c1', 'Fruits', 'orange', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEdNnOUcIc64qJA_rB_l_26YscKi8lQNeNqg&usqp=CAU' ),
    new Category('c2', 'Veggies', 'green', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shopping-bag-full-of-fresh-vegetables-and-fruits-royalty-free-image-1128687123-1564523576.jpg?crop=1.00xw:0.751xh;0,0.212xh&resize=1200:*'),
    new Category('c3', 'Gadgets', 'red', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-select-2019-family?wid=882&hei=1058&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1567022175704'),
    new Category('c4', 'Grocery', 'brown', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSH2AYi8z6mYBgAc1-4rmvgq5LIHy2crSsMdw&usqp=CAU'),
    new Category('c5', 'Fashion', 'blue', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4Rt2kuFOwYvrYOOemVuFDERFACFP26BTX4w&usqp=CAU'),
    new Category('c6', 'Fancy', 'blue', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4Rt2kuFOwYvrYOOemVuFDERFACFP26BTX4w&usqp=CAU'),
]

export const PRODUCTS = [
    new Product('p1', 'c1', 'Banana', '35', '1 kg', 'LULU', 'https://ewscripps.brightspotcdn.com/dims4/default/a19a88b/2147483647/strip/true/crop/494x278+0+36/resize/1280x720!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2F13%2F78%2F52d35c26458ea53423ece430bfbc%2Fbanana.jpg'),
    new Product('p2', 'c1', 'Grapes', '50', '1 kg', 'LULU', 'https://5.imimg.com/data5/RK/KV/XE/SELLER-100337308/black-sharad-seedless-grapes-500x500.jpg'),
    new Product('p3', 'c1', 'Orange', '50', '1 kg', 'LULU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqRYzeuiBd0aw5Ege9D07YtiXKqgGwJliL5A&usqp=CAU'),

    new Product('p4', 'c2', 'Onion', '30', '1 kg', 'LULU', 'https://lh3.googleusercontent.com/proxy/CIORG6g63vozv57J1rQLOgFVYQsymIqDT6SQPLpnO0LXfgPjshHtmkct8XVrVNPuooFak2wCmXxJEm2aXjMmeuZRvG9JudD7E5t3Y97gATyJ-dc'),
    new Product('p5', 'c2', 'Tomato', '25', '1 kg', 'LULU', 'https://cdn.britannica.com/16/187216-131-FB186228/tomatoes-tomato-plant-Fruit-vegetable.jpg'),
    new Product('p6', 'c2', 'Potato', '35', '1 kg', 'LULU', 'https://economictimes.indiatimes.com/thumb/height-450,width-600,imgsize-111140,msid-72862126/potato-getty.jpg?from=mdr'),

    new Product('p7', 'c3', 'IPhone', '350', '1', 'APPLE', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-select-2019-family?wid=882&hei=1058&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1567022175704'),
    new Product('p8', 'c3', 'IPad', '500', '1', 'APPLE', 'https://sm.pcmag.com/t/pcmag_in/review/a/apple-ipad/apple-ipad-air-2019_gr8d.640.jpg'),
    new Product('p9', 'c3', 'MacBook', '150', '1', 'APPLE', 'https://i.gadgets360cdn.com/products/laptops/large/1525203910_635_macbook-air-mqd32hn-a.jpg'),

    new Product('x', 'c4', 'Sugar', '40', '1 kg', 'LULU', 'https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator-asia.com/headlines/markets/bitter-sweet-revelations-pakistan-sugar-millers-deny-corruption-findings-as-accusations-fly/11442277-1-eng-GB/Bitter-sweet-revelations-Pakistan-sugar-millers-deny-corruption-findings-as-accusations-fly_wrbm_large.jpg'),
    new Product('y', 'c4', 'Rice', '37', '1 kg', 'LULU', 'https://img2.exportersindia.com/product_images/bc-full/2019/10/1563596/ir-36-raw-rice-1572068602-5131597.jpeg'),
    new Product('z', 'c4', 'Wheat', '150', '1 kg', 'LULU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGSzC9t-IUaeXE_qwk1pC_sn_9G5SRanMqUA&usqp=CAU'),

    new Product('a', 'c5', 'Shirt', '35', '1', 'Trends', 'https://5.imimg.com/data5/YJ/BO/MY-10973479/mens-designer-casual-shirt-500x500.jpg'),
    new Product('b', 'c5', 'Pant', '50', '1', 'Trends', 'https://sc02.alicdn.com/kf/HTB1tQhmLpXXXXcQXXXXq6xXFXXXo.jpg'),
    new Product('c', 'c5', 'Shoe', '50', '1', 'Trends', 'https://images-na.ssl-images-amazon.com/images/I/61W5Y7WaYML._AC_UX500_.jpg'),

    new Product('a', 'c6', 'Shirt', '35', '1', 'Trends', 'https://5.imimg.com/data5/YJ/BO/MY-10973479/mens-designer-casual-shirt-500x500.jpg'),
    new Product('b', 'c6', 'Pant', '50', '1', 'Trends', 'https://sc02.alicdn.com/kf/HTB1tQhmLpXXXXcQXXXXq6xXFXXXo.jpg'),
    new Product('c', 'c6', 'Shoe', '50', '1', 'Trends', 'https://images-na.ssl-images-amazon.com/images/I/61W5Y7WaYML._AC_UX500_.jpg'),
]

export const DEALS = [
    new Deal('d1', 'c2', 'Onion', '20','1','LULU','https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shopping-bag-full-of-fresh-vegetables-and-fruits-royalty-free-image-1128687123-1564523576.jpg?crop=1.00xw:0.751xh;0,0.212xh&resize=1200:*' ),
    new Deal('d2', 'c4', 'I Phone', '200','1','APPLE', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-select-2019-family?wid=882&hei=1058&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1567022175704'),
    new Deal('d3', 'c5', 'Shirt', '20','1','Trends','https://5.imimg.com/data5/YJ/BO/MY-10973479/mens-designer-casual-shirt-500x500.jpg'),
]

export const SHOPS = [
    new Shop('s1', 'LULU', 'https://www.arabianbusiness.com/public/styles/926px_617px_landscape/public/images/2018/12/12/lulu-supermarket.jpg?itok=OeQvdVIv'),
    new Shop('s2', 'APPLE', 'https://images.idgesg.net/images/article/2018/05/glendale-apple-store-100757905-large.jpg'),
    new Shop('s3', 'Trends', 'https://www.forummalls.in/wp-content/uploads/malls/shantiniketan/shop_front/trends/fsn_trends_f.jpg')
]

