import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native'

import Card from './Card'

const DealsTile = props => {
    return (
        <TouchableOpacity onPress={props.onSelect}>
            <View>
                <Card style={{...styles.categoryItem, ...props.style}}>
                    <View style={{flexDirection: 'row', flex: 1}}>
                        <Image source={{uri: props.imageUrl}} style={styles.bgImage} />
                        <View style={{backgroundColor: 'white', textAlign: 'center'}}>
                            <Text>{props.title}</Text>
                            <Text>{props.seller}</Text>
                            <View style={{alignItems: 'flex-end'}}><Text style={{fontSize: 20}}>$ {props.price}</Text></View>
                        </View>
                    </View>
                </Card>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    categoryItem: {
        height: 65,
        width: 60,
        margin: 5,
        borderRadius: 5,
        overflow: 'hidden'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        flex: 1
    },
})

export default DealsTile;