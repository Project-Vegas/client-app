import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native'

import AppbarTitle from './AppbarTitle'
import Container from './Container'
import StyledScrollView from './StyledScrollView'
import { theme } from '../styles/theme'
import { categoryToIconMap } from '../utils/categoryToIconMap'
import SubmitButton from './SubmitButton'
import { baseURL } from '../utils/baseURL'
import { useHistory } from 'react-router-native'
import StateContext from '../context/StateContext'

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  row: {
    width: '100%',
    padding: 15,
    alignItems: 'flex-start',
    borderBottomColor: theme.colors.gray,
    borderBottomWidth: 2,
    flexDirection: 'row',
  },
  text: {
    fontSize: theme.fontSize.medium,
    color: theme.colors.black,
  },
  inputStyle: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    flex: 1,
    marginLeft: 4,
    justifyContent: 'center',
    paddingLeft: 4,
    fontSize: theme.fontSize.medium,
  },
  buttonDiv: {
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
})

export default function EditItem({ item, setCurrentState}) {
  const history = useHistory()
  const [newItem, setNewItem] = useState(item)
  const [state, setState] = useContext(StateContext)

  const handleFormSubmit = () => {
    if (newItem.price !== item.price || newItem.quantity !== item.quantity) {
      fetch(`${baseURL}/item/${item.product_id}`, {
        method: 'PUT',
        body: JSON.stringify(newItem),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
      })
      .then(response => {
        if (response.ok) {
          Alert.alert("SUCCESS", "Item updated successfully.", [
            {
              text: "OK",
              onPress: () => { history.push(`/`) },
            }
          ],
          {
            cancelable: false,
          })
        } else {
          Alert.alert("FAILURE", "Item could not be added.", [
            {
              text: "OK",
              onPress: () => { history.push(`/`) },
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

  const handleOnBack = () => {
    if (newItem.price !== item.price || newItem.quantity !== item.quantity) {
      Alert.alert("WARNING", "The changes you have made may not be saved. Do you still wish to leave?", [
        {
          text: 'YES',
          onPress: () => { setCurrentState('view') }
        },
        {
          text: 'NO',
          style: "cancel",
        },
      ])
    }
    else {
      setCurrentState('view')
    }
  }

  return (
    <Container>
      <AppbarTitle title={'Edit'} cross onPress={handleOnBack}/>
      <StyledScrollView>
        <View style={styles.container}>
          <View style={styles.row}>
            <Text style={styles.text}>Product id: {newItem.product_id}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Name: {newItem.name}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Description: {newItem.description}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Price: ₹</Text>
            {
              state.user.role !== 'employee' ?
                <TextInput
                  style={styles.inputStyle}
                  keyboardType="numeric"
                  value={String(newItem.price)}
                  onChangeText={text => {
                    setNewItem({
                      ...newItem,
                      price: text
                    })
                  }}
                />
              :
                <Text style={styles.text}>{newItem.price}</Text>
            }
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Availabilibity: </Text>
            <TextInput
              style={styles.inputStyle}
              keyboardType="numeric"
              value={String(newItem.quantity)}
              onChangeText={text => {
                setNewItem({
                  ...newItem,
                  quantity: text
                })
              }}
            />
            <Text style={{ fontSize: theme.fontSize.medium }}> units</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>
              Category: <FontAwesomeIcon icon={categoryToIconMap[newItem.category]} /> {newItem.category}
            </Text>
          </View>
        </View>

        <View style={styles.buttonDiv}>
          <SubmitButton text="Change" onPress={handleFormSubmit} />
        </View>
      </StyledScrollView>
    </Container>
  )
}
