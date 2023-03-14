import React from 'react';
import {  SafeAreaView, StatusBar, View } from 'react-native';
import Home from './src/screens/Home/Home';
import Post from './src/components/Post/Post'

const App = ()=>{
  return(
    <>
    <StatusBar barStyle='dark-content'/>
    <SafeAreaView>
      <Post/>
    </SafeAreaView>
    </>
  )
}
export default App;
