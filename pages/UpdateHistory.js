import React, { useEffect, useContext } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

import { theme } from '../styles/theme'
import AppbarSearch from '../components/AppbarSearch'
import Container from '../components/Container'
import UpdatesCard from '../components/UpdatesCard'
import StyledScrollView from '../components/StyledScrollView'

import StateContext from '../context/StateContext'

export default function UpdateHistory() {
  const [state, setState] = useContext(StateContext)
  useEffect(() => {
    fetch(`http://pal16sourav.pythonanywhere.com/updates/`)
      .then(response => response.json())
      .then(response => {
        setState({ ...state, updates: response.updates })
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  let updatesToShow = state.updates
  if (updatesToShow && state.itemSearchTerm.length > 0 && isNaN(Number(state.itemSearchTerm))) {
    updatesToShow = state.updates.filter(i =>
      i.name.toLowerCase().includes(state.itemSearchTerm)
    )
  } else if (updatesToShow && state.itemSearchTerm.length > 0) {
    updatesToShow = state.updates.filter(i =>
      i.product_id.includes(state.itemSearchTerm)
    )
  }
  return (
    <Container>
      <AppbarSearch />
      {
        updatesToShow ?
        <StyledScrollView>
        {
          updatesToShow.length > 0 ?
            updatesToShow.map((item, index) => (
              <UpdatesCard key={index} update={item} />
            ))
          :
          <View>
            <Text style={theme.titleText}>No items found</Text>
          </View>
        }
        </StyledScrollView> :
        <ActivityIndicator size="large" color={theme.colors.primary} />
      }
    </Container>
  )
}
