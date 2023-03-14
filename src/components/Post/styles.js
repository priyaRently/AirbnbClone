import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        margin:20,
    },
    image:{
        width:'100%',
        height:250,
        resizeMode:'cover',
        justifyContent:'center',
        borderRadius:10,
    },
    info1:{
        fontSize:18,
    },
    info2:{
        fontSize:22,
        color:'black',
    },
    info3:{
        fontSize:20,
        
    },
    info4:{
        fontSize:20,
        textDecorationLine:'underline'
    },
})

export default styles;