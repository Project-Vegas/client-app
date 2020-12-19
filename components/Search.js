import React, { useContext, useState } from 'react'
import { TextInput, View, StyleSheet, TouchableNativeFeedback } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTimes, faSearch } from '@fortawesome/free-solid-svg-icons'

import StateContext from '../context/StateContext'
import { theme } from '../styles/theme'

const styles = StyleSheet.create({
  container: {
    borderBottomColor: theme.colors.textPrimary,
    color: theme.colors.textPrimary,
    borderBottomWidth: 2,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    overflow: "scroll",
  },
  textInput: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSize.medium,
    width: '80%',
  }
})

export default function Search() {
  const [state, setState] = useContext(StateContext)

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={'Type to Search'}
        value={state.itemSearchTerm}
        onChangeText={text => setState({ ...state, itemSearchTerm: text.toLowerCase() })}
      />
      {
        state.itemSearchTerm.length > 0 ?
          <TouchableNativeFeedback
            onPress={() => setState({ ...state, itemSearchTerm: '' })}
          >
            <View
              style={{
                padding: 2,
              }}
            >
            <FontAwesomeIcon
              icon={faTimes}
              size={26}
              color={theme.colors.textPrimary}
            />
            </View>
          </TouchableNativeFeedback>
        : (
          <View
            style={{
              padding: 2,
            }}
          >
          <FontAwesomeIcon
            icon={faSearch}
            size={26}
            color={theme.colors.textPrimary}
          />
          </View>
        )
      }
    </View>
  )
}
