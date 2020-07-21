import React, {useState, useEffect} from 'react'
import {Text, View, StyleSheet, FlatList} from 'react-native'

import {CATEGORIES, PRODUCTS} from '../data/dummy-data'
import ProductItem from '../components/ProductItem'
import GridTile from '../components/GridTile'

const AllCategoriesScreen = props=> {

    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [shops, setShops] = useState([])
    const [deals, setDeals] = useState([])

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
            <GridTile 
                title={itemData.item.title} 
                price={itemData.item.price} 
                quantity={itemData.item.quantity}
                seller={itemData.item.seller}
                imageUrl={itemData.item.imageUrl}
                style={styles.productItem}
                onSelect={()=> {
                    props.navigation.navigate({routeName: 'Category', params: {
                        categoryId: itemData.item.id, categories: categories
                    }})
                }}
            />
        )
    }

    return (
        <View style={styles.screen}>
            <FlatList 
                data={categories} 
                keyExtractor={(item,index)=> item.id} 
                renderItem={renderProductItem}
                style={{ width: '100%'}}
            />
        </View>
    )
}

AllCategoriesScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: 'All Categories' ,
        headerStyle: {
            backgroundColor: 'orange'
        }
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange'
    },
    productItem: {
        width: '95%',
        height: 200,
        marginBottom: 20
    }
})

export default AllCategoriesScreen