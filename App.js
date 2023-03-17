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
import Tab from './src/navigations/tab';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, StackActions} from '@react-navigation/native'

 const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Tab' component={Tab} options={{ headerShown: false }}/>
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false}}/>
        <Stack.Screen name='Explore' component={Explore} options={{ headerShown: false}}/>
        <Stack.Screen name='Destination' component={Destination} options={{ headerShown: false}}/>
        <Stack.Screen name='Search' component={Search} options={{headerTitle:'Search your Destination'}}/>
        <Stack.Screen name='Guests' component={Guests} options={{headerTitle:'How many people?'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;
