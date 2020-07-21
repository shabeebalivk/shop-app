import React, {useState, useEffect} from 'react'
import {Text, View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'

import Card from './Card'
import { Ionicons } from '@expo/vector-icons'
import Input from './TextInput'
import {PRODUCTS} from '../data/dummy-data'
import { TextInput } from 'react-native-gesture-handler'

const Header = props=> {
  
    const [products, setProducts] = useState([])
    const [enteredValue, setEnteredValue] = useState('');

    useEffect(() => {

        fetch('https://rn-shop-app.herokuapp.com/product')
        .then((response) => response.json())
        .then((json) => setProducts(json))
        .catch((error) => console.error(error))
        .finally(() => {});

      }, []);

      const numberInputHandler = inputText => {
          setEnteredValue(inputText)
      }

      const clearSearchBar = ()=> {
        setEnteredValue('')
      }


    let content;
    let clearButton;
    if(enteredValue) {
      clearButton= <Ionicons name="md-close" size={23} color="red" style={{padding: 15}} onPress={clearSearchBar}/>
      const searchResults = products.find(product=>product.title===enteredValue)
      if(searchResults){
        content = (
              <View style={{backgroundColor: 'white', margin: 10, padding:5}}>
                <TouchableOpacity
                  onPress={()=>{
                    props.onSearch(searchResults.id);
                    setEnteredValue('')
                  }
                }>
                  <Text style={{color:'red'}}>Search Result</Text>  
                  <Text >{searchResults.title} - {searchResults.seller}</Text>
                </TouchableOpacity>
            </View>
        )
      }else {
        content = (
          <Text>
            No results
          </Text>
        )
      }
    }

    return (
      <View>
        <View style={styles.header}>
          <View style={styles.screen}>
            <Card style={styles.inputContainer}>
                <Ionicons name="md-menu" size={23} color="orange" style={{paddingLeft: 10}} onPress={()=>props.onMenuClick()}/>
                <Input
                    style={styles.input}
                    blurOnSubmit
                    autoCorrect={false}
                    placeholder="I'm looking for...(eg. Orange)"
                    underlineColorAndroid='transparent'
                    onChangeText={numberInputHandler}
                    value={enteredValue}
                />
                {clearButton}
                {/* <Ionicons name="md-close" size={23} color="red" style={{padding: 15}} onPress={clearSearchBar}/> */}
            </Card>
            <Card style={styles.notificationContainer}>
              <Ionicons name="md-notifications-outline" size={23} color="orange"/>
            </Card>
            </View>
          </View>
        <View style={{ alignItems: 'center', justifyContent: 'center', }}>
          {content}
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flexDirection: 'row',
        flex: 1,
        marginTop: 10
      },
        header: {
          flexDirection: 'row'
      },
      input: {
          width: 100,
          textAlign: 'center',
          flex: 1,
          margin: 5
      },
      inputContainer: {
          width: '80%',
          maxWidth: '95%',
          minWidth: 300,
          alignItems: 'center',
          marginTop: 20,
          marginLeft: 9,
          marginRight: 4,
          flexDirection: 'row',
          flex: 1
      },
      notificationContainer: {
        width: 40,
        justifyContent: 'center',
        marginTop: 20,
        marginRight: 5,
        alignItems: 'center'
      },
})

export default Header;

