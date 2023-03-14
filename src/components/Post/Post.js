import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'

const Post = () => {
  return (
    <View style={styles.container}>
      <Image 
      source={require('AirbnbClone/assets/images/Post.jpg')}
      style={styles.image}/>
      <Text style={styles.info1}>1 bed . 1 bedroom</Text>
      <Text style={styles.info2}>
        Description
      </Text>
      <Text style={styles.info3}>
        $43 <Text style={{color:'black'}}>$36</Text>/night
      </Text>
      <Text style={styles.info4}>
        $247 total
      </Text>
    </View>
  )
}

export default Post