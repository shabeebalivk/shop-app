import React, {useState, useEffect} from 'react'
import {Text, View, StyleSheet, FlatList} from 'react-native'

import {CATEGORIES, PRODUCTS, DEALS} from '../data/dummy-data'
import ProductItem from '../components/ProductItem'

const DealsScreen = props=> {

    const [deals, setDeals] = useState([])

    useEffect(() => {

        fetch('https://rn-shop-app.herokuapp.com/deal')
          .then((response) => response.json())
          .then((json) => setDeals(json))
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
    const displayedProducts = deals.filter(product=> product.id.indexOf(catId) >= 0)

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

DealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId')
    const deals = navigationData.navigation.getParam('deals')
    const selectedCategory = deals.find(cat=> cat.id ===catId)
    return {
        headerTitle: selectedCategory.title
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default DealsScreen