import { View, Text, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
const Home = (props) => {
  const navigation = useNavigation();
  return (
    
    <View style={styles.container}>

      <Pressable style={styles.searchBtn}
        onPress={() => navigation.navigate('Destination')}>
        <Fontisto name='search' size={25} color={'#f15454'}/>
        <Text style={styles.searchBtnText}>Where are you going?</Text>
      </Pressable>

      <ImageBackground
        source={require('AirbnbClone/assets/images/Image1.jpg')}
        style={styles.imageBackground}>
        <Text style={styles.textGoNear}>Go Near</Text>
        
        <Pressable style={styles.button}
          onPress={() => navigation.navigate('Explore')}>
          <Text style={styles.textExplore}>Explore nearby stays</Text>
        
        </Pressable>
      </ImageBackground>
      <Text style={styles.textLiveAnywhere}>
        Live anywhere
      </Text>
    </View>
  )
}

export default Home;

