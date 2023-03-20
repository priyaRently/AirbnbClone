import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/ProfileLogout';
import Wishlists from '../screens/Wishlists/Wishlists';
import Inbox from '../screens/Inbox/Inbox';
import Trips from '../screens/Trips/Trips';

import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
const Tab = createBottomTabNavigator();
const Func = () => {
    
  return (
      <Tab.Navigator screenOptions={() => ({
        tabBarShowLabel: true,
        tabBarActiveTintColor:'#EB455F',
        headerShown: false,
        tabBarStyle: { height: 50 },
        tabBarHideOnKeyboard: true,
      })}>
        <Tab.Screen name='Home' component={Home}
          options={() => ({
            tabBarLabel: 'Explore',
            tabBarIcon: ({ focused, size, color }) => {
              let iconName;
              iconName = focused ? 'home-sharp' : 'home-outline';
              size = size;
              color = focused ? '#EB455F' : null;
              return <Fontisto name='search' size={size} color={color} />
            }
          })} />
        <Tab.Screen name='Wishlists' component={Wishlists}
          options={() => ({
            tabBarLabel: 'Wishlits',
            tabBarIcon: ({ focused, size, color }) => {
              let iconName;
              iconName = focused ? 'home-sharp' : 'home-outline';
              size = size
              color = focused ? '#EB455F' : null;
              return <FontAwesome name='heart-o' size={size} color={color} />;
            }
          })} />
        <Tab.Screen name='Trips' component={Trips}
          options={() => ({
            tabBarLabel: 'Trips',
            tabBarIcon: ({ focused, size, color }) => {
              let iconName;
              iconName = focused ? 'home-sharp' : 'home-outline';
              size = size
              color = focused ? '#EB455F' : null;
              return <FontAwesome5 name='airbnb' size={size} color={color} />;
            }
          })} />
        <Tab.Screen name='Inbox' component={Inbox}
          options={() => ({
            tabBarLabel: 'Inbox',
            tabBarIcon: ({ focused, size, color }) => {
              let iconName;
              iconName = focused ? 'home-sharp' : 'home-outline';
              size = size
              color = focused ? '#EB455F' : null;
              return <Feather name='message-square' size={size} color={color} />;
            }
          })} />
        <Tab.Screen name='Profile' component={Profile}
          options={() => ({
            tabBarLabel: 'Profile',
            tabBarIcon: ({ focused, size, color }) => {
              let iconName;
              iconName = focused ? 'home-sharp' : 'home-outline';
              size = size+8
              color = focused ? '#EB455F' : null;
              return <EvilIcons name='user' size={size} color={color} />;
            }
          })} />
      </Tab.Navigator>
    
  )
}

export default Func

const styles = StyleSheet.create({})