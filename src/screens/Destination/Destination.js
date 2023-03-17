import { View, Text, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import styles from './style'
import city from '../../../assets/data/search'

const Destination = (props) => {
    const [input, setInput] = useState('');
    const [search,setSearch]=useState(null);
    const[data,masterdata]=useState(city);
    console.log(search,12)
    const searchResult = (text) => {
        setInput()
    }
    const searchFilter=(text)=>
    {
    if(text)
    {
        const filterData=data.filter((text)=>{
           return text.indexOf(text)>-1;
        }
        )
        masterdata(filterData);
        setSearch('');

    }
    else{
        masterdata(filterData); 
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
                    onChangeText={((text)=>searchFilter(text))}
                />
            </View>
            <FlatList
                data={city}
                renderItem={({ item }) => (
                    <View style={styles.row}>
                        <View style={styles.iconCan}>
                            <Entypo name='location-pin' size={30} color='black' />
                        </View>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>

                )}
            />
        </View>
    )
}

export default Destination