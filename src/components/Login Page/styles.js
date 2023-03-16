import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    title: {
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 15
    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10
    },
    countryBtn: {
        borderBottomWidth:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5
    },
    countryBtnView: {

    },
    textInput: {
        fontSize: 22,
    },
    continueBtn: {
        backgroundColor: '#B2B2B2',
        alignItems: 'center',
        borderRadius: 8,
        marginBottom:8
    },
    continueText: {
        color: 'white',
        fontSize: 22,
        margin: 6
    },
    orText: {
        textAlign: 'center',
        fontSize: 18,
        marginHorizontal:15
    },
    optionView: {
        
    },
    optionBtn: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        margin: 10
    },
    optionText: { 
        fontSize: 18, 
        color: 'black', 
        marginLeft: 50,        
    },
})