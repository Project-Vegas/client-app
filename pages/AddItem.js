import React from 'react'
import { Text } from 'react-native'

import AppbarSearch from '../components/AppbarSearch'
import Container from '../components/Container'

export default function Sales() {
  return (
    <Container>
      <AppbarSearch />
      <Text>Add item 🧮 </Text>
    </Container>
  )
}
