import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    height: '76%',
    margin: 8,
    paddingBottom: 10,
  }
})

export default function StyledScrollView({ children }) {
  return (
    <ScrollView style={styles.container}>
      {children}
    </ScrollView>
  )
}
