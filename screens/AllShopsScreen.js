import React, {useState, useEffect} from 'react'
import {Text, View, StyleSheet, FlatList} from 'react-native'

import {CATEGORIES, PRODUCTS} from '../data/dummy-data'
import ProductItem from '../components/ProductItem'
import ShopTile from '../components/ShopTile'

const AllShopsScreen = props=> {

    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [shops, setShops] = useState([])

    useEffect(() => {

        fetch('https://rn-shop-app.herokuapp.com/category')
          .then((response) => response.json())
          .then((json) => setCategories(json))
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
            <ShopTile 
                title={itemData.item.title} 
                price={itemData.item.price} 
                quantity={itemData.item.quantity}
                seller={itemData.item.seller}
                imageUrl={itemData.item.imageUrl}
                style={styles.categoryItem}
                onSelect={()=>{
                    props.navigation.navigate({routeName: 'Shops', params: {
                        seller: itemData.item.title, products: products
                    }})
                }}
            />
        )
    }

    return (
        <View style={styles.screen}>
            <FlatList 
                data={shops} 
                keyExtractor={(item,index)=> item.id} 
                renderItem={renderProductItem}
                style={{ width: '100%'}}
            />
        </View>
    )
}

AllShopsScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: 'All Shops' ,
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    categoryItem: {
        height: 200,
        width: '95%',
    }
})

export default AllShopsScreen