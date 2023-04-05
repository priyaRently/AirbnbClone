import { View, Text, Image, SafeAreaView, FlatList,StyleSheet } from 'react-native'
import React from 'react'
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

export const styles = StyleSheet.create({
    container:{
        margin:20,
    },
    image:{
        width:'100%',
        height:220,
        borderRadius:10,
        resizeMode:'cover',
    },
    bedrooms:{
        marginVertical:10,
    },
    description:{
        fontSize:20,
        lineHeight:26,
        color:'black',
    },
    price:{
        fontSize:20,  
        color:'black',
    },
    oldPrice:{
        textDecorationLine:'line-through',
        color:'#5b5b5b'
    },
    newPrice:{
        fontWeight:'bold',
    },
    totalPrice:{
        fontSize:18,
        textDecorationLine:'underline'
    },
})

