import React from 'react'
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native'
import { useHistory } from 'react-router-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faQrcode, faICursor } from '@fortawesome/free-solid-svg-icons'

import AppbarTitle from '../components/AppbarTitle'
import Container from '../components/Container'
import { theme } from '../styles/theme'

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80%',
    padding: 20
  },
  button: {
    width: '80%',
    flexDirection: 'row',
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    margin: 5,
    borderRadius: 10,
  },
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSize.medium,
    marginLeft: 2,
  }
})
export default function AddItemPage() {
  const history = useHistory()

  return (
    <Container>
      <AppbarTitle title='Add Item' />
      <View style={styles.root}>
        <TouchableNativeFeedback onPress={() => {
          history.push('/scan')
        }}>
          <View style={styles.button}>
            <FontAwesomeIcon icon={faQrcode} size={30} color={theme.colors.textPrimary} />
            <Text style={styles.text}> Scan code</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => {
          history.push('/item/_')
        }}>
          <View style={styles.button}>
            <FontAwesomeIcon icon={faICursor} size={30} color={theme.colors.textPrimary} />
            <Text style={styles.text}> Type code</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </Container>
  )
}
