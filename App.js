import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native';
import Home from './src/screens/Home/Home';
import Post from './src/components/Post/Post';
import Search from './src/screens/SearchResults/Search';
import Destination from './src/screens/Destination/Destination';
import Guests from './src/screens/Guests/Guests'
const App = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView>
      {/* <Home/> */}
      {/* <Post /> */}
      {/* <Search/> */}
      {/* <Destination/> */}
      <Guests/>
      </SafeAreaView>
    </>
  )
}
export default App;
