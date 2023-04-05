import {StyleSheet } from "react-native";

const styles = StyleSheet.create({
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

export default styles;