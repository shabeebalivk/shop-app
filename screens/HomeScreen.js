import React, { useEffect, useState} from 'react'
import {ScrollView, Text, View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard, FlatList, ImageBackground} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import axios from 'axios'


import Input from '../components/TextInput'
import Card from '../components/Card'
import { DEALS, SHOPS} from '../data/dummy-data'
import GridTile from '../components/GridTile'
import HeaderButton from '../components/HeaderButton'
import ShopTile from '../components/ShopTile'
import DealsTile from '../components/DealsTile'
import Header from '../components/Header'


const HomeScreen = props=> {

    const [enteredValue, setEnteredValue] = useState('');
    const [categories, setCategories] = useState([])
    const [deals, setDeals] = useState([])
    const [products,setProducts] = useState([])
    const [shops, setShops] = useState([])

    const numberInputHandler = inputText => {
        setEnteredValue(inputText)
    }


    const renderGridItem = itemData=> {
        return (
            <GridTile title={itemData.item.title} imageUrl= {itemData.item.imageUrl} onSelect={()=> {
                props.navigation.navigate({routeName: 'Category', params: {
                    categoryId: itemData.item.id, categories: categories
                }})
            }}/>
        )
    }

    const renderDealItem = itemData=> {
        return (
            <DealsTile 
                title={itemData.item.title} 
                price={itemData.item.price} 
                imageUrl= {itemData.item.imageUrl} 
                seller= {itemData.item.seller}
                style={styles.dealItem} 
                onSelect={()=> {
                    props.navigation.navigate({
                        routeName: 'Deals', params: {
                        categoryId: itemData.item.id,
                        deals: deals
                }})
            }}/>
        )
    }

    const renderShopItem = itemData=> {
        return (
            <ShopTile 
                title={itemData.item.title} 
                imageUrl= {itemData.item.imageUrl} 
                style={styles.shopItem} 
                onSelect={()=> {
                    props.navigation.navigate({routeName: 'Shops', params: {
                    seller: itemData.item.title, products: products
                }})
            }}/>
        )
    }
    const searchHandler = id=> {
            props.navigation.navigate({routeName: 'Search', params: {
                categoryId: id, products: products
            }})
    }
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
      }, []);

    console.log(props.navigation)


    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'orange'}}>
        <Header onSearch={searchHandler} onMenuClick={props.navigation.toggleDrawer}/>
        <View style={styles.screen}>
            <Card style={styles.imageSlide1}>
                <ImageBackground
                    source={require('../assets/index.jpeg')} 
                    style={styles.image}
                    resizeMode= 'cover' 
                    style={{flex: 1,justifyContent: 'flex-end'}}
                >
                    <Text style={styles.text}>On Demand Delivery</Text>
                </ImageBackground>
            </Card>
            <Card style={styles.categories}>
                <View style={{ flexDirection: 'row', flex:1,}}>
                    <Text style={{flex: 1, paddingLeft:5,}}>categories</Text>
                    <TouchableOpacity onPress={()=>{
                         props.navigation.navigate({routeName: 'AllCategories', params: {
                            
                        }})
                    }}>
                        <Text style={{ flex: 1, textAlign: 'right', paddingRight: 9}}>view all</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    horizontal={true}
                    keyExtractor={(item,index)=> item.id}
                    data= {categories}
                    renderItem={renderGridItem}
                />
            </Card>
            <Card style={styles.dealsContainer}>
                <View style={{ flexDirection: 'row', flex:1}}>
                    <Text style={{flex: 1, paddingLeft: 5}}>TODAY'S DEALS</Text>
                    <TouchableOpacity onPress={()=>{
                         props.navigation.navigate({routeName: 'AllDeals', params: {
                            
                        }})
                    }}>
                        <Text style={{ flex: 1, textAlign: 'right', paddingRight: 9}}>view all</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{paddingLeft: 5}}>06:02:40</Text>
                <FlatList
                    horizontal={true}
                    keyExtractor={(item,index)=> item.id}
                    data= {deals}
                    renderItem={renderDealItem}
                />
            </Card>
            <Card style={styles.imageSlide}>
                <View style={{ flexDirection: 'row', flex:1}}>
                    <Text style={{flex: 1, paddingLeft: 5}}>Shops Near You</Text>
                    <TouchableOpacity onPress={()=>{
                         props.navigation.navigate({routeName: 'AllShops', params: {
                            
                        }})
                    }}>
                        <Text style={{ flex: 1, textAlign: 'right', paddingRight: 9}}>view all</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.shopCards}>
                <FlatList
                        horizontal={true}
                        keyExtractor={(item,index)=> item.id}
                        data= {shops}
                        renderItem={renderShopItem}
                    />
                </View>
            </Card>
        </View>
        </ScrollView>
    )

}
HomeScreen.navigationOptions = navData =>{
    return {
        headerStyle: {
            backgroundColor: 'orange',
        },
        // headerLeft: <View style={styles.headerButtons}>
        //                 <View style={styles.screen1}>
        //                     <Card style={styles.inputContainer}>
        //                         <HeaderButtons HeaderButtonComponent={HeaderButton}>
        //                             <Item 
        //                                 title="Menu"
        //                                 iconName='ios-menu'
        //                                 iconSize={23}
        //                                 onPress={()=>{
        //                                     navData.navigation.toggleDrawer();
        //                                 }}
        //                             />
        //                         </HeaderButtons>
        //                         <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30} style={styles.input} >
        //                             <TouchableWithoutFeedback onPress={()=>{ Keyboard.dismiss()}}>
        //                                 <Input 
        //                                     blurOnSubmit 
        //                                     autoCorrect={false} 
        //                                     placeholder="I'm looking for"
        //                                     onChangeText={()=>{}}
        //                                 />
        //                             </TouchableWithoutFeedback>
        //                          </KeyboardAvoidingView>  
        //                         <HeaderButtons HeaderButtonComponent={HeaderButton}>
        //                             <Item 
        //                                 title="Search"
        //                                 iconName='ios-search'
        //                                 onPress={()=>{}}
        //                                 iconSize={23}
        //                             />
        //                         </HeaderButtons>
        //                     </Card>
        //                     <Card style={styles.notificationContainer}>
        //                         <HeaderButtons HeaderButtonComponent={HeaderButton}>
        //                             <Item
        //                                 title="notification"
        //                                 iconName='md-notifications-outline'
        //                                 onPress={()=>{}}
        //                                 iconSize={20}
        //                             />
        //                         </HeaderButtons>
        //                     </Card>
        //                 </View>
        //             </View> ,
    }
}


const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    imageSlide1: {
        height: 150,
        width: '95%',
        overflow: 'hidden',
        margin: 7,
        backgroundColor: 'orange'
    },
    imageSlide: {
        height: 150,
        width: '95%',
        overflow: 'hidden',
        margin: 7,
    },
    categories: {
        height: 100,
        width: '95%',
        overflow: 'hidden',
        marginBottom: 5
        
    },
    image: {
       width: '100%'

    },
    categoryItem: {
        height: 65,
        backgroundColor: 'grey',
        width: 60,
        margin: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    smallCards: {
        flexDirection: 'row'
    },
    dealsContainer: {
        height: 150,
        width: '95%',
        overflow: 'hidden'
    },
    dealCards: {
        flexDirection: 'row'
    },
    dealItem: {
        height: 90,
        backgroundColor: 'grey',
        width: 100,
        margin: 5,
        backgroundColor: 'grey'
    },
    shopCards: {
        flexDirection: 'row'
    },
    shopItem: {
        height: 110,
        backgroundColor: 'grey',
        width: 110,
        margin: 4
    },
    screen1: {
        flexDirection: 'row',
        flex: 1,
      },
    headerButtons: {
        flexDirection: 'row',
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
        marginTop: 15,
        marginLeft: 9,
        marginRight: 4,
        flexDirection: 'row',
        flex: 1
    },
    notificationContainer: {
      width: 50,
      justifyContent: 'center',
      marginTop: 15,
      alignItems: 'center'
    },
    text: {
         textAlign: 'right', 
         fontSize: 30, 
         color: 'white',
         backgroundColor:'rgba(0,0,0,0.5)',
         padding: 5
    }
})


export default HomeScreen