import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import styles
 from './styles'
const Inbox = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Inbox</Text>
      <View>
        <TouchableOpacity>
          <Text>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Notification</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Inbox