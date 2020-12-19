import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import Button from './Button'
import { theme } from '../styles/theme'
import StateContext from '../context/StateContext'
import { Redirect } from 'react-router-native'

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
  const [state, setState] = useContext(StateContext)

  const onSignoutPress = () => {
    setState({ ...state, user: null })
  }

  return (
    <View style={styles.container}>
      {children}
      <View>
        <Button onPress={onSignoutPress} style={styles.buttonWrapper} icon={faSignOutAlt} />
      </View>
    </View>
  )
}
