import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
const Tab = createMaterialTopTabNavigator();
import Post from '../components/Post/Post';
import Explore from '../components/Explore';
const TopTab = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name='Post' component={Post}/>
        <Tab.Screen name='Explore' component={Explore}/>
    </Tab.Navigator>
  )
}

export default TopTab

const styles = StyleSheet.create({})