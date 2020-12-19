import React from 'react'
import { TouchableNativeFeedback, View, Text, StyleSheet } from 'react-native'

import { theme } from '../styles/theme'

const styles = StyleSheet.create({
  button: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    margin: 5,
    borderRadius: 10,
  },
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSize.medium,
    marginLeft: 2,
  },
})

export default function SubmitButton({ text, onPress }) {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableNativeFeedback>
  )
}
