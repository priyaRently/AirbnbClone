import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'

const Explore = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Explore</Text>
    </View>
  )
}

export default Explore