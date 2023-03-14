import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        
    },
    searchBtn:{
        backgroundColor:'white',
        width: Dimensions.get('screen').width - 20,
        height:60,
        borderRadius:30,
        marginHorizontal:10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        top:20,
        zIndex:100,
    },
    searchBtnText:{
        fontSize:18,
        fontWeight:700
    },
    imageBackground:{
        width:'100%',
        height:500,
        resizeMode:'cover',
        justifyContent:'center'
    },
    textGoNear:{
        color:'white',
        fontSize:80,
        fontWeight:'bold',
        width:'70%',
        marginLeft:20
    },
    button:{
        borderRadius:10,
        backgroundColor:'white',
        borderColor:'black',
        width:200,
        marginLeft:20,
        justifyContent:'center',
        alignItems:'center',
        padding:10
    },
    textExplore:{
        color:'black',
        fontSize:16,
        fontWeight:'bold',
    },
    
});

export default styles;
