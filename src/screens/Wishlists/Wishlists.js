import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

const Wishlists = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wishlists</Text>
      <Text style={styles.title2}>Create your first Wishlist</Text>
      <Text style={styles.desc} textBreakStrategy='balanced'>
        As you search, tap the heart icon to save your
        favourite places to stay or things to do to a wishlist.
      </Text>
    </View>
  )
}

export default Wishlists