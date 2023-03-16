import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
const Trips = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trips</Text>
      <Text style={styles.title2}>No trips booked ... yet!</Text>
      <Text style={{ fontSize: 16 }}>Time to dust off your bags and start planning your next adventure</Text>

      <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('Destination')}>
        <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>Start searching</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.helpBtn}>
        <Text style={{ fontSize: 16, flexDirection: 'row' }}>
          <Text>Can't find your reservation here? </Text>
          <Text style={{ textDecorationLine: 'underline', fontWeight: 'bold', color: 'black' }}>Visit the Help Ceneter</Text>
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Trips