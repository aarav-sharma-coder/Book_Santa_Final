import React from 'react-native'
import {createStackNavigator} from 'react-navigation-stack'
import BookDonateScreen from '../screens/BookDonateScreen'
import BookRequestScreen from '../screens/BookRequestScreen'
import ReceiverDetailScreen from '../screens/ReceiverDetailScreen'

export const AppStackNavigator = createStackNavigator({
    BookDonateList: {
        screen: BookDonateScreen,
        navigationOptions:{
        headerShown: false
        }
    },
    ReceiverDetails: {
        screen : ReceiverDetailScreen,
        navigationOptions:{
        headerShown: false
        }
    },

},
{
initialRouteName: 'BookDonateList'
}
);