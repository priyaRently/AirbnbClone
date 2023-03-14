import React from 'react';
import {  SafeAreaView, StatusBar, View } from 'react-native';
import Home from './src/screens/Home/Home';

const App = ()=>{
  return(
    <>
    <StatusBar barStyle='dark-content'/>
    <SafeAreaView>
      <Home/>
    </SafeAreaView>
    </>
  )
}
export default App;
