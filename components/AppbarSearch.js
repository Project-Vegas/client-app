import React from 'react'
import { View, StyleSheet } from 'react-native'

import Appbar from './Appbar'
import Button from './Button'
import Search from './Search'

const styles = StyleSheet.create({
  buttonWrapper: {
    paddingLeft: 15,
    paddingRight: 5,
    padding: 15,
  },
  searchContainer: {
    flexGrow: 1,
  },
})

export default function AppbarSearch() {
  return (
    <Appbar>
      <View style={styles.searchContainer}>
        <Search />
      </View>
    </Appbar>
  )
}
