import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { faTimes, faPen } from '@fortawesome/free-solid-svg-icons'

import { theme } from '../styles/theme'
import Button from './Button'
import Appbar from './Appbar'

const styles = StyleSheet.create({
  titleContainer: {
    flexGrow: 1,
  },
  buttonWrapper: {
    paddingLeft: 15,
    paddingRight: 5,
    padding: 15,
  },
})

export default function AppbarTitle({ title, edit, cross, onPress }) {
  return (
    <Appbar>
      <View style={styles.titleContainer}>
        <Text style={theme.titleText}>{ title }</Text>
      </View>
      {edit && (
        <View>
          <Button style={styles.buttonWrapper} icon={faPen} onPress={onPress} />
        </View>)
      }
      {cross && (
        <View>
          <Button style={styles.buttonWrapper} icon={faTimes} onPress={onPress} />
        </View>)
      }
    </Appbar>
  )
}
