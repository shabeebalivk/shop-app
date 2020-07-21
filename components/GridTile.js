import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, ImageBackground } from 'react-native'

import Card from './Card'

const GridTile = props => {
    return (
        <TouchableOpacity onPress={props.onSelect}>
            <View>
                <Card style={{...styles.categoryItem, ...props.style}}>
                    <ImageBackground source={{uri: props.imageUrl}} style={styles.bgImage}>
                        <View><Text style={styles.text}>{props.title}</Text></View>
                    </ImageBackground>
                </Card>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    categoryItem: {
        height: 65,
        width: 60,
        marginTop: 2,
        marginLeft: 9,
        marginRight: 5,
        borderRadius: 5,
        overflow: 'hidden'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        textAlign: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'orange', backgroundColor: 'white', textAlign: 'center'
    }
})

export default GridTile;