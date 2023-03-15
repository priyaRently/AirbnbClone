import { View, Text, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import styles from './style'
import searchResult from '../../../assets/data/search'

const Destination = (props) => {
    const [input, setInput] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Where to?</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Search Destination'
                    value={input}
                    onChangeText={setInput}
                />
            </View>
            <FlatList
                data={searchResult}
                renderItem={({ item }) => (
                    <View style={styles.row}>
                        <View style={styles.iconCan}>
                            <Entypo name='location-pin' size={30} color='black'/>
                        </View>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>

                )}
            />
        </View>
    )
}

export default Destination