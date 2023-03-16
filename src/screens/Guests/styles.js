import { StyleSheet } from "react-native"

export default styles = StyleSheet.create({
    container:{
        margin:20,
    },
    box:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:20,
        borderBottomWidth:1,
    },
    buttonBox:{
        flexDirection:'row',
        alignItems:'center',
    },
    button:{
        borderWidth:1,
        borderRadius:5,
        width:30,
        height:30,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText:{
        fontWeight: 'bold', 
        fontSize: 24, 
        color: 'black',
    }
})