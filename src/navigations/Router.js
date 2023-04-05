import React from 'react';
import { SafeAreaView, ScrollView, Settings, StatusBar, View ,Button, TouchableOpacity, Text} from 'react-native';

import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/ProfileLogout';
import Wishlists from '../screens/Wishlists/Wishlists';
import Inbox from '../screens/Inbox/Inbox';
import Trips from '../screens/Trips/Trips';
import Post from '../components/Post/Post';

import Search from '../screens/SearchResults/Search';
import Destination from '../screens/Destination/Destination';
import Guests from '../components/Guests/Guests';
import Login from '../components/Login Page/Login';
import Explore from '../components/Explore';
import Tab from './tab';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, StackActions } from '@react-navigation/native'
import ShowProfile from '../components/ShowProfile'
import ProfileLogin from '../screens/Profile/ProfileLogin';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name='Tab' component={Tab} options={{ headerShown: false }} />
        <Stack.Screen name='Post' component={Post} options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='Explore' component={Explore} options={{ headerShown: false }} />
        <Stack.Screen name='Destination' component={Destination} options={{ headerShown: false }} />
        <Stack.Screen name='Search' component={Search} options={{ headerTitle: 'Search your Destination' }} />
        <Stack.Screen name='ProfileLogin' component={ProfileLogin} options={{ headerShown: false }} />
        <Stack.Screen name='Guests' component={Guests} options={{ headerTitle: 'How many people?', presentation: 'modal' }} />
        <Stack.Screen name='ShowProfile' component={ShowProfile} options={{
          headerShown: true,
          headerTitle:'', 
          headerRight: () => (
            <TouchableOpacity >
              <Text style={{color:'black',textDecorationLine:'underline',fontWeight:'bold',fontSize:18}}>Edit</Text>
            </TouchableOpacity>
          ),
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;
