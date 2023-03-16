import React from 'react';
import { SafeAreaView, ScrollView, Settings, StatusBar, View } from 'react-native';

import Home from './src/screens/Home/Home';
import Profile from './src/screens/Profile/Profile';
import Wishlists from './src/screens/Wishlists/Wishlists';
import Inbox from './src/screens/Inbox/Inbox';
import Trips from './src/screens/Trips/Trips';
import Post from './src/components/Post/Post';
import Search from './src/screens/SearchResults/Search';
import Destination from './src/screens/Destination/Destination';
import Guests from './src/screens/Guests/Guests';
import Login from './src/components/Login Page/Login';
import Explore from './src/components/Explore';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, StackActions} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import Fun from './src/tab';

 const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Fun' component={Fun} options={{ headerShown: false }}/>
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false}}/>
        <Stack.Screen name='Explore' component={Explore} options={{ headerShown: false}}/>
        <Stack.Screen name='Destination' component={Destination} options={{ headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;
