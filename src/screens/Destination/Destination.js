import { View, Text, TextInput, FlatList, TouchableOpacity, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import styles from './style'
import city from '../../../assets/data/search'
import { useNavigation } from '@react-navigation/native'
import DatePicker from 'react-native-neat-date-picker'
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Destination = (props) => {

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };

    const navigation = useNavigation();
    const [Fdata, filterData] = useState(city);
    const [search, setSearch] = useState('');
    const [data, masterdata] = useState(city);

    const searchFilter = (text) => {
        if (text) {
            const filter = data.filter((item) => {
                const itemData = item.description;
                return itemData.indexOf(text) > -1;
            }
            )
            filterData(filter);
            setSearch(text);
        }
        else {
            masterdata(data);
            setSearch(text);
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Where to?</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Search Destination'
                    value={search}
                    onChangeText={((text) => searchFilter(text))}
                />
            </View>
            <FlatList
                data={search ? Fdata : null}
                renderItem={({ item }) => (
                    <View style={styles.row}>
                        <View style={styles.iconCan}>
                            <Entypo name='location-pin' size={30} color='black' />
                        </View>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>

                )}
            />
            <View style={{ borderWidth: 1, borderRadius: 10, padding: 15, marginTop: 20 }}>
                <TouchableOpacity >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>When</Text>
                        <View style={{}}>
                            <TouchableOpacity onPress={showDatePicker} >
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Add week</Text>
                                <DateTimePickerModal
                                    isVisible={isDatePickerVisible}
                                    mode="date"
                                    onConfirm={handleConfirm}
                                    onCancel={hideDatePicker}
                                />
                            </TouchableOpacity>

                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ borderWidth: 1, borderRadius: 10, padding: 15, marginTop: 20 }}>
                <TouchableOpacity>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Who</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Guests')}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Add Guests</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Destination