import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        
    },
    searchBtn:{
        backgroundColor:'white',
        // width: Dimensions.get('screen').width - 20,
        width:'90%',
        height:60,
        borderRadius:25,
        marginHorizontal:10,
        flexDirection:'row',

        alignItems:'center',
        position:'absolute',
        top:20,
        zIndex:100,
        alignSelf:'center'
    },
    searchBtnText:{
        fontSize:18,
        fontWeight:700,
        marginLeft:15,
        color:"black"
    },
    imageBackground:{
        width:'100%',
        height:400,
        resizeMode:'cover',
        justifyContent:'center'
    },
    textGoNear:{
        color:'#F5EAEA',
        fontSize:60,
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
    },
    textExplore:{
        padding:12,
        color:'black',
        fontSize:18,
        fontWeight:'bold',
    },
    textLiveAnywhere:{
        color:'black',
        fontSize:25,
        fontWeight:'700',
        marginLeft:25,
        marginVertical:25,
        padding:10,
    },
});

export default styles;
