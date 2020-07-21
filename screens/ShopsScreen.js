import React, {useState, useEffect} from 'react'
import {Text, View, StyleSheet, FlatList} from 'react-native'

import {CATEGORIES, PRODUCTS, DEALS} from '../data/dummy-data'
import ProductItem from '../components/ProductItem'

const ShopsScreen = props=> {

    const [products, setProducts] = useState([])

    useEffect(() => {

        fetch('https://rn-shop-app.herokuapp.com/product')
        .then((response) => response.json())
        .then((json) => setProducts(json))
        .catch((error) => console.error(error))
        .finally(() => {});

      }, []);

    const renderProductItem = itemData => {
        return (
            <ProductItem 
                title={itemData.item.title} 
                price={itemData.item.price} 
                quantity={itemData.item.quantity}
                seller={itemData.item.seller}
                image={itemData.item.imageUrl}
            />
        )
    }

    const catId = props.navigation.getParam('seller');
    const displayedProducts = products.filter(product=> product.seller.indexOf(catId) >= 0)

    return (
        <View style={styles.screen}>
            <FlatList 
                data={displayedProducts} 
                keyExtractor={(item,index)=> item.id} 
                renderItem={renderProductItem}
                style={{ width: '100%'}}
            />
        </View>
    )
}

ShopsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('seller')
    const products = navigationData.navigation.getParam('products')
    const selectedCategory = products.find(cat=> cat.seller ===catId)
    if(selectedCategory){
        return {
            headerTitle: selectedCategory.seller
        }
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default ShopsScreen