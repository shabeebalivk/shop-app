import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'

import HomeScreen from '../screens/HomeScreen'
import CategoryScreen from '../screens/CategoryScreen'
import ShopsScreen from '../screens/ShopsScreen'
import DealsScreen from '../screens/DealsScreen'
import CartScreen from '../screens/CartScreen'
import ProductDetailsScreen from '../screens/ProductDetailsScreen'
import SearchScreen from '../screens/SearchScreen'
import AllShopsScreen from '../screens/AllShopsScreen' 
import AllDealsScreen from '../screens/AllDealsScreen'
import AllCategoriesScreen from '../screens/AllCategoriesScreen'

const ShopsNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            headerTitle: '',
            headerShown: false

        }
    },
    Category: {
        screen: CategoryScreen,
    },
    Shops: ShopsScreen,
    Deals: DealsScreen,
    Cart: CartScreen,
    Search: SearchScreen,
    ProductDetails: ProductDetailsScreen,
    AllShops: AllShopsScreen,
    AllDeals: AllDealsScreen,
    AllCategories: AllCategoriesScreen

}, {
    defaultNavigationOptions: {
       headerStyle: {
           backgroundColor: Platform.OS === 'android' ? 'red':'white',
       },
       headerTintColor: Platform.OS === 'android' ? 'white' : 'red',
    }
})

const MainNavigator = createDrawerNavigator({
    ShopHome: { screen: ShopsNavigator, navigationOptions: {
        drawerLabel: 'Home'
    }},
    Cart: CartScreen
})

export default createAppContainer(MainNavigator);