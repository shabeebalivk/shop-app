import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, ImageBackground } from 'react-native'

import Card from './Card'

const ShopTile = props => {
    return (
        <TouchableOpacity onPress={props.onSelect}>
            <View>
                <Card style={{...styles.categoryItem, ...props.style}}>
                    <ImageBackground source={{uri: props.imageUrl}} style={styles.bgImage}>
                        {/* <View><Text style={{backgroundColor: 'white', textAlign: 'end'}}>{props.title}</Text></View> */}
                    </ImageBackground>
                </Card>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    categoryItem: {
        height: 110,
        width: 110,
        margin: 5,
        borderRadius: 5,
        overflow: 'hidden'
    },
    bgImage: {
        width: '100%',
        height: '100%',
    },
})

export default ShopTile;