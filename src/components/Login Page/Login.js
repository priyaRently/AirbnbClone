import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import Email from 'AirbnbClone/assets/svg icons/email.svg'
import Apple from 'AirbnbClone/assets/svg icons/apple.svg'
import Facebook from 'AirbnbClone/assets/svg icons/facebook-logo-2019.svg'
import Google from 'AirbnbClone/assets/svg icons/google.svg'
const Login = () => {
    const navigation = useNavigation();
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
            <TouchableOpacity style={styles.continueBtn}
                onPress={() => navigation.navigate('ProfileLogin')}>
                <Text style={styles.continueText}>Continue</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 15 }}>
                <Text style={{ textDecorationLine: 'line-through', color: '#DDDDDD' }}>                  </Text>
                <Text style={styles.orText}>or</Text>
                <Text style={{ textDecorationLine: 'line-through', color: '#DDDDDD' }}>                  </Text>
            </View>


            <View style={styles.optionView}>
                <TouchableOpacity style={styles.optionBtn}>
                    {/* <Icon name='mail-outline' size={24} color='black' /> */}
                    <Email width={24} height={24}/>
                    <Text style={styles.optionText}>Continue with Email</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionBtn}>
                    {/* <Icon name='facebook' size={24} color='#2F58CD' /> */}
                    <Facebook width={24} height={24}/>
                    <Text style={styles.optionText}>Continue with Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionBtn}>
                    {/* <AntDesign name='google' size={24} /> */}
                    <Google width={24} height={24}/>
                    <Text style={styles.optionText}>Continue with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionBtn}>
                    {/* <AntDesign name='apple1' size={24} color='black' /> */}
                    <Apple width={24} height={24}/>
                    <Text style={styles.optionText}>Continue with Apple</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login