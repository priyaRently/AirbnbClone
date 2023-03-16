import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Icon from 'react-native-vector-icons/MaterialIcons'
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Login from '../../components/Login Page/Login'
import { useNavigation } from '@react-navigation/native'

const Profile = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your profile</Text>
            <Text style={styles.desc}>Log in to start planning your next trip</Text>
            
            <TouchableOpacity style={styles.button} 
            onPress={()=>navigation.navigate('Login')}>
                <Text style={styles.buttonText}>Log in</Text>
            </TouchableOpacity>
            
            <View style={{ flexDirection: 'row', marginTop: 10, }}>
                <Text>Don't have an account?</Text>
                <Text style={{ textDecorationLine: 'underline', fontWeight: 600 }}>Sign up</Text>
            </View>
            
            <View style={styles.optionView}>
                <TouchableOpacity style={styles.optionBtn}>
                    <View style={{ flexDirection: 'row'}}>
                        <AntDesign name='setting' size={26} />
                        <Text style={styles.btnText}>Setting</Text>
                    </View>

                    <Icon name='arrow-right' size={30} />
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.optionBtn}>
                    <View style={{ flexDirection: 'row'}}>
                        <MIcon name='home-heart' size={26} />
                        <Text style={styles.btnText}>Learn about hosting</Text>
                    </View>

                    <Icon name='arrow-right' size={30} />
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.optionBtn}>
                    <View style={{ flexDirection: 'row'}}>
                        <Icon name='help-outline' size={26} />
                        <Text style={styles.btnText}>Get help</Text>
                    </View>

                    <Icon name='arrow-right' size={30} />
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.optionBtn}>
                    <View style={{ flexDirection: 'row'}}>
                        <Entypo name='open-book' size={26} />
                        <Text style={styles.btnText}>Terms of Service</Text>
                    </View>

                    <Icon name='arrow-right' size={30} />
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.optionBtn}>
                    <View style={{ flexDirection: 'row'}}>
                        <Icon name='policy' size={26} />
                        <Text style={styles.btnText}>Privacy Policy</Text>
                    </View>

                    <Icon name='arrow-right' size={30} />
                </TouchableOpacity>
            </View>

            <Text>Version 23.10.1 (26004345)</Text>
        </View>
    )
}

export default Profile