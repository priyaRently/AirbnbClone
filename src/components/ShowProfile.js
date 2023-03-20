import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
const ShowProfile = () => {
    return (
        <View style={styles.container}>
            <Image source={require('AirbnbClone/assets/images/Image1.jpg')} style={styles.image} />
            <Text style={styles.title}>Hi, I'm Priya</Text>
            <Text style={{fontSize:18}}>Joined in March 2023</Text>
            <Icon name='verified-user' size={30} style={styles.icon} />
            <Text style={{fontSize:16, fontWeight:600, color:'black'}}>Identity verification</Text>
            <Text style={{marginVertical:5}}>Show others you're really you with the identity verification badge.</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={{fontSize:16,textAlign:'center',fontWeight:'bold',color:'black'}}>Get the badge</Text>
            </TouchableOpacity>
            <Text style={styles.about}>About</Text>
        </View>
    )
}

export default ShowProfile

const styles = StyleSheet.create({
    container:{
        margin:20,
    },
    image: {
         width: 100, 
        height: 100, 
        borderRadius: 50 
    },
    title:{
        fontSize:30,
        fontWeight:'bold',
        color:'black',
        marginVertical:10,
    },
    icon:{
        color:'#E96479',
        marginTop:35,
        marginBottom:25,
    },
    button:{
        borderWidth:1,
        padding:10,
        alignContent:'center',
        justifyContent:'center',
        borderRadius:10,
        marginTop:15
    },
    about:{
        borderTopWidth:1,
        marginTop:30,
        paddingTop:30,
        fontSize:24,
        color:'black',
        fontWeight:'bold'
    }
})