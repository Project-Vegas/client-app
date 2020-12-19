import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useParams } from 'react-router-native'

import AppbarTitle from '../components/AppbarTitle'
import Container from '../components/Container'
import EditItem from '../components/EditItem'
import StyledScrollView from '../components/StyledScrollView'
import StateContext from '../context/StateContext'
import { theme } from '../styles/theme'
import { categoryToIconMap } from '../utils/categoryToIconMap'
import AddItem from './AddItem'

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  row: {
    width: '100%',
    padding: 15,
    alignItems: 'flex-start',
    borderBottomColor: theme.colors.gray,
    borderBottomWidth: 1,
  },
  text: {
    fontSize: theme.fontSize.medium,
    color: theme.colors.black,
  }
})

export default function Item() {
  const { id } = useParams()
  const [state, _] = useContext(StateContext)
  const [currentState, setCurrentState] = useState('view')

  const item = state.items.find(d => d.product_id === id)
  if (!item) {
    return (
      <AddItem id={id} />
    )
  }
  if (currentState === 'edit') {
    return (
      <EditItem item={item} setCurrentState={setCurrentState} />
    )
  }

  const onEditButtonPress = () => { setCurrentState('edit') }
  return (
    <Container>
      <AppbarTitle title={item.name} edit onPress={onEditButtonPress} />
      <StyledScrollView>
        <View style={styles.container}>
          <View style={styles.row}>
            <Text style={styles.text}>Product id: {item.product_id}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Name: {item.name}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Description: {item.description}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Price: ₹{item.price}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Availabilibity: {item.quantity} units</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>
              Category: <FontAwesomeIcon icon={categoryToIconMap[item.category]} /> {item.category}
            </Text>
          </View>
        </View>
      </StyledScrollView>
    </Container>
  )
}
