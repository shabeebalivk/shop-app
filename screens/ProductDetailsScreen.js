import React,{useEffect, useState} from 'react'
import { Text, View, ScrollView, Image} from 'react-native'

import {PRODUCTS} from '../data/dummy-data'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'

import HeaderButton from '../components/HeaderButton'
const ProductDetailsScreen = props=> {

    const [products, setProducts] = useState([])

    useEffect(() => {

        fetch('https://rn-shop-app.herokuapp.com/product')
        .then((response) => response.json())
        .then((json) => setProducts(json))
        .catch((error) => console.error(error))
        .finally(() => {});

      }, []);

    const productId = props.navigation.getParam('productId')
    const selectedProduct = products.find(product=> product.id === productId)

    return (
        <ScrollView>
            <Image />
            <View style={{...styles.productRow, ...styles.productDetail}}>
                <Text>Price: {props.price}</Text>
                <Text>Quantity: {props.quantity}</Text>
                <Text>Seller: {props.seller}</Text>
            </View>
            <View>
                <Text>
                    {selectedProduct.title}
                </Text>
            </View>
        </ScrollView>
    )
}

ProductDetailsScreen.navigationOptions = (navigationData) => {
    // const productId = navigationData.navigation.getParam('productId')
    // const selectedProduct = products.find(product=> product.id=== productId)
    return {
        headerTitle: '',
        headerRight: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Favorite" iconName="ios-star"/>
        </HeaderButtons>
        )
    }
}

export default ProductDetailsScreen