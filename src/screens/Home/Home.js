import { View, Text, ImageBackground, Pressable,ScrollView } from 'react-native'
import React from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import Post from '../../components/Post/Post'

const Home = (props) => {
  const navigation = useNavigation();
  return (
    
    <ScrollView style={styles.container}>

      <Pressable style={styles.searchBtn}
        onPress={() => navigation.navigate('Destination')}>
        <Fontisto name='search' size={22} color={'#f15454'} style={{marginHorizontal:15}}/>
        <View style={{alignItems:'center',justifyContent:'center'}}>
        <Text style={styles.searchBtnText}>Where are you going?</Text>
        <Text style={{fontSize:14,marginLeft:10}}>Anywhere . Any week . Add guests</Text>
        </View>
        
      </Pressable>

      <ImageBackground
        source={require('AirbnbClone/assets/images/Image1.jpg')}
        style={styles.imageBackground}>
        <Text style={styles.textGoNear}>Go Near</Text>
        
        <Pressable style={styles.button}
          onPress={() => navigation.navigate('Post')}>
          <Text style={styles.textExplore}>Explore nearby stays</Text>
        
        </Pressable>
      </ImageBackground>
      <Text style={styles.textLiveAnywhere}>
        Live anywhere
      </Text>

    </ScrollView>
  )
}

export default Home;

