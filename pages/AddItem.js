import React, { useRef } from 'react'
import { Text, Alert, View, StyleSheet } from 'react-native'
import { useHistory } from 'react-router-native'
import t from 'tcomb-form-native'

import { theme } from '../styles/theme'
import Container from '../components/Container'
import AppbarTitle from '../components/AppbarTitle'
import SubmitButton from '../components/SubmitButton'
import StyledScrollView from '../components/StyledScrollView'
import { categories } from '../utils/categoryToIconMap'
import { baseURL } from '../utils/baseURL'

const styles = StyleSheet.create({
  messsage: {
    fontSize: theme.fontSize.small,
    color: theme.colors.textPrimary,
    marginBottom: 10,
  },
})

export default function AddItem({ id }) {
  const history = useHistory()

  const Form = t.form.Form

  const Categories = t.enums(categories)
  const Item = t.struct({
    product_id: t.Number,
    name: t.String,
    description: t.String,
    price: t.Number,
    quantity: t.Number,
    category: Categories,
  })

  const options = {
    auto: 'placeholders',
    fields: {
      product_id: {
        placeholder: 'Product ID',
      },
      category: {
        nullOption: { value: '', text: 'Choose item category' },
      },
    },
  }

  const defaultValue = {
    product_id: !isNaN(Number(id)) ? id : '',
    name: '',
    description: '',
    price: '',
    quantity: '',
  }

  const form = useRef(null)
  const handleFormSubmit = () => {
    const value = form.current.getValue()
    if (value) {
      fetch(`${baseURL}/item/`, {
        method: 'POST',
        body: JSON.stringify(value),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
      })
        .then(response => {
          if (response.ok) {
            Alert.alert("SUCCESS", "Item added successfully.", [
              {
                text: "OK",
                onPress: () => { history.push('/') },
              }
            ],
            {
              cancelable: false,
            })
          } else {
            Alert.alert("FAILURE", "Item could not be added.", [
              {
                text: "OK",
                onPress: () => { history.push('/') },
              }
            ],
            {
              cancelable: false,
            })
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  }

  return (
    <Container>
      <AppbarTitle title='Add item' />
      <StyledScrollView>
        <View style={styles.container}>
          <Text style={styles.messsage}>The item does not exist. You may add it here</Text>
          <Form
            ref={form}
            type={Item}
            options={options}
            value={defaultValue}
          />

          <SubmitButton text="Submit" onPress={handleFormSubmit} />
        </View>
      </StyledScrollView>
    </Container>
  )
}
