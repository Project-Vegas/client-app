import React, { useContext, useEffect } from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'

import StateContext from '../context/StateContext'
import { theme } from '../styles/theme'
import Container from '../components/Container'
import StyledScrollView from '../components/StyledScrollView'
import AppbarSearch from '../components/AppbarSearch'
import ItemCard from '../components/ItemCard'
import { baseURL } from '../utils/baseURL'

const styles = StyleSheet.create({
  textContainer: {
    alignItems: 'center',
  }
})

const Home = () => {
  const [state, setState] = useContext(StateContext)
  useEffect(() => {
    fetch(`${baseURL}/item`)
      .then(response => response.json())
      .then(response => {
        setState({ ...state, items: response })
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  let itemsToShow = state.items
  if (itemsToShow && state.itemSearchTerm.length > 0 && isNaN(Number(state.itemSearchTerm))) {
    itemsToShow = state.items.filter(i =>
      i.name.toLowerCase().includes(state.itemSearchTerm)
    )
  } else if (itemsToShow && state.itemSearchTerm.length > 0) {
    itemsToShow = state.items.filter(i =>
      i.product_id.includes(state.itemSearchTerm)
    )
  }
  return (
    <Container>
      <AppbarSearch />
      {
        itemsToShow ?
        <StyledScrollView>
        {
          itemsToShow.length > 0 ?
            itemsToShow.map((item, index) => (
              <ItemCard key={index} item={item} />
            ))
          :
          <View style={styles.textContainer}>
            <Text style={theme.titleText}>No items found</Text>
          </View>
        }
        </StyledScrollView> :
        <ActivityIndicator size="large" color={theme.colors.primary} />
      }
    </Container>
  )
}

export default Home
