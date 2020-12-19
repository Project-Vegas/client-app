import React from 'react'
import { View, StyleSheet } from 'react-native'

import { theme } from '../styles/theme'

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    ...theme.alignCenter,
    flexWrap: 'wrap',
  }
})

export default function Container(props) {
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        {props.children}
      </View>
    </View>
  )
}
