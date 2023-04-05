import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'


const ProfileLogin = () => {
    const navigation =useNavigation();
    return (
        <ScrollView style={{ margin: 20 }} showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>Profile</Text>
            <TouchableOpacity style={styles.view1} onPress={()=>navigation.navigate('ShowProfile')}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('AirbnbClone/assets/images/Image1.jpg')}
                        style={styles.image} />
                    <View >
                        <Text style={{ fontSize: 18, color: 'black' }}>Priya</Text>
                        <Text>Show Profile</Text>
                    </View>
                </View>
                <Icon name='arrow-right' size={30} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.view2}>
                <View style={{ flexDirection: 'column',paddingRight:6 }}>
                    <Text style={{fontWeight:'bold',fontSize:20,color:'black'}}>Airbnb your place</Text>
                    <Text textBreakStrategy='highQuality'>It's simple to get set up and start earning.</Text>
                </View>
                <Image source={require('AirbnbClone/assets/images/Post3.jpg')} style={styles.image2} />
            </TouchableOpacity>
            
            <View style={{borderBottomWidth:1,marginVertical:20,borderBottomColor:'#DDDDDD'}}></View>
            
            <Text style={styles.heading}>Settings</Text>

            <TouchableOpacity style={styles.optionBtn}>
                <View style={{ flexDirection: 'row' }}>
                    {/* <AntDesign name='setting' size={26} /> */}
                    
                    <Text style={styles.btnText}>Personal information</Text>
                </View>
                <Icon name='arrow-right' size={30} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionBtn}>
                <View style={{ flexDirection: 'row' }}>
                    <AntDesign name='setting' size={26} />
                    <Text style={styles.btnText}>Login & security</Text>
                </View>
                <Icon name='arrow-right' size={30} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionBtn}>
                <View style={{ flexDirection: 'row' }}>
                    <AntDesign name='setting' size={26} />
                    <Text style={styles.btnText}>Payments and payouts</Text>
                </View>
                <Icon name='arrow-right' size={30} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionBtn}>
                <View style={{ flexDirection: 'row' }}>
                    <AntDesign name='setting' size={26} />
                    <Text style={styles.btnText}>Taxes</Text>
                </View>
                <Icon name='arrow-right' size={30} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionBtn}>
                <View style={{ flexDirection: 'row' }}>
                    <AntDesign name='setting' size={26} />
                    <Text style={styles.btnText}>Translation</Text>
                </View>
                <Icon name='arrow-right' size={30} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionBtn}>
                <View style={{ flexDirection: 'row' }}>
                    <AntDesign name='setting' size={26} />
                    <Text style={styles.btnText}>Notifications</Text>
                </View>
                <Icon name='arrow-right' size={30} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionBtn}>
                <View style={{ flexDirection: 'row' }}>
                    <AntDesign name='setting' size={26} />
                    <Text style={styles.btnText}>Privacy and sharing</Text>
                </View>
                <Icon name='arrow-right' size={30} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionBtn}>
                <View style={{ flexDirection: 'row' }}>
                    <AntDesign name='setting' size={26} />
                    <Text style={styles.btnText}>Travel for work</Text>
                </View>
                <Icon name='arrow-right' size={30} />
            </TouchableOpacity>

            <Text style={styles.heading}>Hosting</Text>

            <TouchableOpacity style={styles.optionBtn}>
                <View style={{ flexDirection: 'row' }}>
                    <AntDesign name='setting' size={26} />
                    <Text style={styles.btnText}>List your space</Text>
                </View>
                <Icon name='arrow-right' size={30} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionBtn}>
                <View style={{ flexDirection: 'row' }}>
                    <AntDesign name='setting' size={26} />
                    <Text style={styles.btnText}>Learn about hosting</Text>
                </View>
                <Icon name='arrow-right' size={30} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionBtn}>
                <View style={{ flexDirection: 'row' }}>
                    <AntDesign name='setting' size={26} />
                    <Text style={styles.btnText}>Host an Experience</Text>
                </View>
                <Icon name='arrow-right' size={30} />
            </TouchableOpacity>

            <Text style={styles.heading}>Referrals & Credits</Text>

            <TouchableOpacity style={styles.optionBtn}>
                <View style={{ flexDirection: 'row' }}>
                    <AntDesign name='setting' size={26} />
                    <View>
                        <Text style={styles.btnText}>Host an Experience</Text>
                        <Text textBreakStrategy='balanced' style={{marginLeft:20}}>Earn Rs.1,238 for every new host you offer</Text>
                    </View>
                </View>
                <Icon name='arrow-right' size={30} />
            </TouchableOpacity>

            <Text style={styles.heading}>Support</Text>

            <TouchableOpacity style={styles.optionBtn}>
                <View style={{ flexDirection: 'row' }}>
                    <AntDesign name='setting' size={26} />
                    <Text style={styles.btnText}>How Airbnb works</Text>
                </View>
                <Icon name='arrow-right' size={30} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionBtn}>
                <View style={{ flexDirection: 'row' }}>
                    <AntDesign name='setting' size={26} />
                    <View>
                        <Text style={styles.btnText}>Safety Centre</Text>
                        <Text textBreakStrategy='simple' style={{marginLeft:20}}>Get the support, tools and information you need to be safe</Text>
                    </View>
                </View>
                <Icon name='arrow-right' size={30} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionBtn}>
                <View style={{ flexDirection: 'row' }}>
                    <AntDesign name='setting' size={26} />
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Text style={styles.btnText}>Contact Neighbourhood Support</Text>
                        <Text textBreakStrategy='balanced' style={{marginLeft:20}}>Let our team know about concerns related to home-sharing activity in your area.</Text>
                    </View>
                </View>
                <Icon name='arrow-right' size={30} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionBtn}>
                <View style={{ flexDirection: 'row' }}>
                    <AntDesign name='setting' size={26} />
                    <Text style={styles.btnText}>Get help</Text>
                </View>
                <Icon name='arrow-right' size={30} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionBtn}>
                <View style={{ flexDirection: 'row' }}>
                    <AntDesign name='setting' size={26} />
                    <Text style={styles.btnText}>Give us feedback</Text>
                </View>
                <Icon name='arrow-right' size={30} />
            </TouchableOpacity>

            <Text style={styles.heading}>Legal</Text>

            <TouchableOpacity style={styles.optionBtn}>
                <View style={{ flexDirection: 'row' }}>
                    <AntDesign name='setting' size={26} />
                    <Text style={styles.btnText}>Terms of Service</Text>
                </View>
                <Icon name='arrow-right' size={30} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionBtn}>
                <View style={{ flexDirection: 'row' }}>
                    <AntDesign name='setting' size={26} />
                    <Text style={styles.btnText}>Privacy Policy</Text>
                </View>
                <Icon name='arrow-right' size={30} />
            </TouchableOpacity>

            <Text style={{textDecorationLine:'underline',fontWeight:'bold',color:'black',fontSize:16}}>Log out</Text>
            <View style={{borderBottomWidth:1,marginVertical:20,borderBottomColor:'#B2B2B2'}}></View>
            <Text>Version 23.10.1 (26004345)</Text>
            
        </ScrollView>
    )
}

export default ProfileLogin

const styles = StyleSheet.create({
    title: {
        marginVertical: 20,
        fontSize: 28,
        fontWeight: 'bold',
        color: 'black'
    },
    heading: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 22,
        marginVertical: 24
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 15
    },
    image2: {
        width: 60,
        height: 60,
        borderRadius:10,
    },
    view1: {
        borderBottomColor: '#B2B2B2',
        borderBottomWidth: 1,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        paddingBottom: 15,
        marginBottom: 15
    },
    view2: { 
        marginTop:10,
        flexDirection: 'row', 
        justifyContent: 'space-between' ,
        alignItems:'center',
        borderWidth:1,
        borderRadius:10,
        paddingVertical:20,
        paddingHorizontal:10
    },
    btnText: {
        fontSize: 18,
        marginLeft: 20,
        color: 'black'
    },
    optionBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        paddingBottom: 15,
        marginBottom: 15,
        borderBottomColor:'#B2B2B2'
    }
})