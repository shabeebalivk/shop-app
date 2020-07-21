import React, {useState, useEffect} from 'react'
import {Text, View, StyleSheet, FlatList} from 'react-native'

import {CATEGORIES, PRODUCTS} from '../data/dummy-data'
import ProductItem from '../components/ProductItem'

const CategoryScreen = props=> {

    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])

    useEffect(() => {

        fetch('https://rn-shop-app.herokuapp.com/category')
          .then((response) => response.json())
          .then((json) => setCategories(json))
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

    const catId = props.navigation.getParam('categoryId');
    const displayedProducts = products.filter(product=> product.categoryId.indexOf(catId) >= 0)

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

CategoryScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');
    const categories = navigationData.navigation.getParam('categories');
    const selectedCategory = categories.find(cat=> cat.id ===catId)
    return {
        headerTitle: selectedCategory.title ,
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default CategoryScreen