import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import styles from './styles'

const Login = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Log in or sign up to Airbnb</Text>
            <View style={styles.input}>
                <TouchableOpacity style={styles.countryBtn}>
                    <View style={styles.countryBtnView}>
                        <Text>Country/Region</Text>
                        <Text style={{ color: 'black', fontSize: 18 }}>India (+91)</Text>
                    </View>
                    <Icon name='keyboard-arrow-down' size={24} color='black' />
                </TouchableOpacity>
                <TextInput placeholder='Phone number'
                    style={styles.textInput} />
            </View>
            <Text style={{ marginBottom: 15, color: 'black' }}>
                We'all call or text you to confirm your number.
                Standard message and data rates apply.
            </Text>
            <TouchableOpacity style={styles.continueBtn}>
                <Text style={styles.continueText}>Continue</Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginVertical:15}}>
                <Text style={{textDecorationLine:'line-through', color:'#DDDDDD'}}>                  </Text>
                <Text style={styles.orText}>or</Text>
                <Text style={{textDecorationLine:'line-through', color:'#DDDDDD'}}>                  </Text>
            </View>


            <View style={styles.optionView}>
                <TouchableOpacity style={styles.optionBtn}>
                    <Icon name='mail-outline' size={24} color='black' />
                    <Text style={styles.optionText}>Continue with Email</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionBtn}>
                    <Icon name='facebook' size={24} color='#2F58CD' />
                    <Text style={styles.optionText}>Continue with Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionBtn}>
                    <AntDesign name='google' size={24} />
                    <Text style={styles.optionText}>Continue with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionBtn}>
                    <AntDesign name='apple1' size={24} color='black' />
                    <Text style={styles.optionText}>Continue with Apple</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login