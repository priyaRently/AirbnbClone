import { View, Text, TouchableOpacity, } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'

const Guests = () => {
    const [adults, setAdults] = useState(0);
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={styles.textCan}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>Adults</Text>
                    <Text style={{ fontSize: 15 }}>Ages 13 or above</Text>
                </View>
                <View style={styles.buttonBox}>
                    <TouchableOpacity
                        onPress={() => setAdults(adults - 1)}
                        style={styles.button}>
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                    
                    <Text style={{ marginHorizontal: 20, fontSize: 20 }}>0</Text>
                    
                    <TouchableOpacity
                        onPress={() => setAdults(adults + 1)}
                        style={styles.button}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.textCan}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>Children</Text>
                    <Text style={{ fontSize: 15 }}>Ages 2 to 12</Text>
                </View>
                <View style={styles.buttonBox}>
                    <TouchableOpacity
                        onPress={() => setAdults(adults - 1)}
                        style={styles.button}>
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={{ marginHorizontal: 20, fontSize: 20 }}>0</Text>
                    <TouchableOpacity
                        onPress={() => setAdults(adults + 1)}
                        style={styles.button}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.textCan}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>Infants</Text>
                    <Text style={{ fontSize: 15 }}>Under 2</Text>
                </View>
                <View style={styles.buttonBox}>
                    <TouchableOpacity
                        onPress={() => setAdults(adults - 1)}
                        style={styles.button}>
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={{ marginHorizontal: 20, fontSize: 20 }}>0</Text>
                    <TouchableOpacity
                        onPress={() => setAdults(adults + 1)}
                        style={styles.button}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Guests