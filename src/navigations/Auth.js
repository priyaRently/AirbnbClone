import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Tab from './tab';
import ProfileLogin from '../screens/Profile/ProfileLogin';

import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Home Screen' component={Tab}/>
    </Stack.Navigator>
  )
}

export const AuthStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name='Login Screen' component={ProfileLogin}/>
      </Stack.Navigator>
    )
  }

const styles = StyleSheet.create({})