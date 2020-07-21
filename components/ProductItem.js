import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native'

const ProductItem = props=> {
    return (
        <View style={styles.productItem}>
            <View>
                <View style={{...styles.productRow, ...styles.productHeader, ...props.style}}>
                    <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
                        <Text style={styles.title}>{props.title}</Text>
                    </ImageBackground>
                </View>
                <View style={{...styles.productRow, ...styles.productDetail}}>
                    <Text>Price: {props.price}</Text>
                    <Text>Quantity: {props.quantity}</Text>
                    <Text>Seller: {props.seller}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    productItem: {
        height: 200,
        width: '95%',
        margin: 10,
        borderRadius: 10,
        overflow: 'hidden',
        
    },
    productRow: {
        flexDirection: 'row'
    },
    productHeader: {
        height: '85%',

    },
    productDetail: {
        height: '15%',
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    title: {
        color: 'white',
        fontSize: 22,
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
        textAlign: 'center'
    }
})

export default ProductItem;