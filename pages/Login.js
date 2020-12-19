import React, { useContext, useRef } from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import t from 'tcomb-form-native'

import Container from '../components/Container'
import AppbarTitle from '../components/AppbarTitle'
import SubmitButton from '../components/SubmitButton'
import StateContext from '../context/StateContext'
import users from '../users'

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
      const loggingInUser = users.find(user => (
        user.username === value.username && user.password === value.password
      ))
      console.log(loggingInUser)
      if (loggingInUser) {
        setState({ ...state, user: loggingInUser })
      }
      else {
        Alert.alert('Uh oh!', 'You entered invalid credentials')
      }
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
