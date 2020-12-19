import React from 'react'
import { View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'

import { theme } from '../styles/theme'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: '100%',
    height: '12%',
    minHeight: 90,
    backgroundColor: theme.colors.primary,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    paddingBottom: 0,
    paddingTop: Constants.statusBarHeight,
  },
  buttonWrapper: {
    paddingLeft: 15,
    paddingRight: 5,
    padding: 15,
  },
})

export default function Appbar({ children }) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}
