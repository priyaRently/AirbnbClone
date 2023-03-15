import { View, Text, Image, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import styles from './styles'
import feed from 'AirbnbClone/assets/data/feed'

const Post = () => {

  const post = feed;

  const renderItem = ({item}) => (
    <View style={styles.container}>
    <Image style={styles.image}
      source={item.image}
    />

    <Text style={styles.bedrooms}>
      {item.bed} bed . {item.bedroom} bedroom
    </Text>
    <Text style={styles.description} numberOfLines={2}>
      {item.type}. {item.title}
    </Text>
    <Text style={styles.price}>
      <Text style={styles.oldPrice}>${item.oldPrice}</Text>
      <Text style={styles.newPrice}> ${item.newPrice}</Text>
      /night
    </Text>

    <Text style={styles.totalPrice}>${item.totalPrice} total</Text>
  </View>
  );

  return (
    
    <SafeAreaView>
      <FlatList
      data={post}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      />

    </SafeAreaView>
    
  )
}

export default Post