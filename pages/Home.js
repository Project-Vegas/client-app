import React from 'react'
import { Text, StyleSheet } from 'react-native'

import Container from '../components/Container'
import AppbarSearch from '../components/AppbarSearch'

const Home = () => {
  return (
    <Container>
      <AppbarSearch />
      <Text>Home</Text>
    </Container>
  )
}

export default Home
