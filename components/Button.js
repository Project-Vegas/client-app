import React from 'react'
import { View, TouchableNativeFeedback, StyleSheet } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import { theme } from '../styles/theme'

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingHorizontal: 35,
  },
})

export default function Button({ style, icon, size, onPress }) {
  return (
    <TouchableNativeFeedback style={{
      flexGrow: 1,
    }} onPress={onPress}>
      <View style={{
        ...styles.container,
        ...style
      }}>
        <FontAwesomeIcon
          icon={icon}
          color={theme.colors.textPrimary}
          size={size ? size : 26}
        />
      </View>
    </TouchableNativeFeedback>
  )
}
