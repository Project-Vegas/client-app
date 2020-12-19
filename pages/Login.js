import React, { useContext, useRef } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Redirect } from 'react-router-native'
import t from 'tcomb-form-native'

import Container from '../components/Container'
import AppbarTitle from '../components/AppbarTitle'
import SubmitButton from '../components/SubmitButton'
import StateContext from '../context/StateContext'

const styles = StyleSheet.create({
  root: {
    paddingTop: 15,
  },
})

const Login = () => {
  const [state, setState] = useContext(StateContext)

  const Form = t.form.Form

  const User = t.struct({
    username: t.String,
    password: t.String,
  })

  const options = {
    auto: 'placeholders',
    fields: {
      username: {
        placeholder: 'Username',
      },
      password: {
        password: true,
        secureTextEntry: true
      }
    },
  }

  const defaultValue = {
    username: '',
    password: '',
  }

  const form = useRef(null)

  const handleFormSubmit = () => {
    const value = form.current.getValue()
    if (value) {
      setState({ ...state, user: value })
    }
  }

  return (
    <Container>
      <AppbarTitle title="Login" />
      <View style={styles.root}>
        <Form
          ref={form}
          type={User}
          options={options}
          value={defaultValue}
        />

        <SubmitButton text="Login" onPress={handleFormSubmit} />
      </View>
    </Container>
  )
}

export default Login
