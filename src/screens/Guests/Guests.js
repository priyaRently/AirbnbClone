import { View, Text, TouchableOpacity, } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import Icon from 'react-native-vector-icons/Entypo';

const Guests = () => {
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={styles.textCan}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>Adults</Text>
                    <Text style={{ fontSize: 16 }}>Ages 13 or above</Text>
                </View>
                <View style={styles.buttonBox}>
                    <TouchableOpacity
                        onPress={() => { if (adults > 0) setAdults(adults - 1) }}
                        style={styles.button}>
                        <Icon name="minus" size={24} color="black" />
                    </TouchableOpacity>

                    <Text style={{ marginHorizontal: 15, fontSize: 24, color: "black" }}>{adults}</Text>

                    <TouchableOpacity
                        onPress={() => setAdults(adults + 1)}
                        style={styles.button}>
                        <Icon name="plus" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.textCan}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>Children</Text>
                    <Text style={{ fontSize: 16 }}>Ages 2 to 12</Text>
                </View>
                <View style={styles.buttonBox}>
                    <TouchableOpacity
                        onPress={() => { if (children > 0) setChildren(children - 1) }}
                        style={styles.button}>
                        <Icon name="minus" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={{ marginHorizontal: 15, fontSize: 24, color: "black" }}>{children}</Text>
                    <TouchableOpacity
                        onPress={() => setChildren(children + 1)}
                        style={styles.button}>
                        <Icon name="plus" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.textCan}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>Infants</Text>
                    <Text style={{ fontSize: 16 }}>Under 2</Text>
                </View>
                <View style={styles.buttonBox}>
                    <TouchableOpacity
                        onPress={() => { if (infants > 0) setInfants(infants - 1) }}
                        style={styles.button}>
                        <Icon name="minus" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={{ marginHorizontal: 15, fontSize: 24, color: "black" }}>{infants}</Text>
                    <TouchableOpacity
                        onPress={() => setInfants(infants + 1)}
                        style={styles.button}>
                        <Icon name="plus" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity style={{
                backgroundColor: '#DF2E38',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 5,
                marginTop:50
            }}>
                <Text style={{
                    margin: 5,
                    fontSize: 24,
                    color: 'white',
                    fontWeight: 'bold',
                }}>Search</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Guests