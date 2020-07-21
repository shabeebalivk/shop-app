import React, {useState, useEffect} from 'react'
import {Text, View, StyleSheet, FlatList} from 'react-native'

import {CATEGORIES, PRODUCTS} from '../data/dummy-data'
import ProductItem from '../components/ProductItem'

const AllDealsScreen = props=> {

    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [shops, setShops] = useState([])
    const [deals, setDeals] = useState([])

    useEffect(() => {

        fetch('https://rn-shop-app.herokuapp.com/deal')
          .then((response) => response.json())
          .then((json) => setDeals(json))
          .catch((error) => console.error(error))
          .finally(() => {});
        
        fetch('https://rn-shop-app.herokuapp.com/shop')
        .then((response) => response.json())
        .then((json) => setShops(json))
        .catch((error) => console.error(error))
        .finally(() => {});

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

    return (
        <View style={styles.screen}>
            <FlatList 
                data={deals} 
                keyExtractor={(item,index)=> item.id} 
                renderItem={renderProductItem}
                style={{ width: '100%'}}
            />
        </View>
    )
}

AllDealsScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: 'All Deals' ,
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default AllDealsScreen