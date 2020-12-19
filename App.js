import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { NativeRouter, Route, Switch, BackButton } from 'react-router-native'
import StateContext from './context/StateContext'

import Navbar from './components/Navbar'
import AppbarTitle from './components/AppbarTitle'
import Container from './components/Container'

import Home from './pages/Home'
import AddItemPage from './pages/AddItem'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

const App = () => {
  const initialState = {
    itemSearchTerm: '',
    dateFrom: '',
    dateTo: '',
    items: [],
    updates: [],
  }
  const contextHook = useState(initialState)

  return (
    <StateContext.Provider value={contextHook}>
      <NativeRouter>
        <BackButton>
          <View style={styles.container}>
            <Switch>
              <Route path='/additem'>
                <AddItemPage />
                <Navbar />
              </Route>
              <Route path='/history'>
                <Container>
                  <AppbarTitle title="Updates" />
                  <Text>Updates</Text>
                </Container>
                <Navbar />
              </Route>
              <Route path='/sales'>
                <Container>
                  <AppbarTitle title="Sales" />
                  <Text>Sales</Text>
                </Container>
                <Navbar />
              </Route>
              <Route path='/scan'>
                <Text>Scanner</Text>
              </Route>
              <Route path='/item/:id'>
                <Text>Individual item</Text>
                <Navbar />
              </Route>
              <Route path='/' exact>
                <Home />
                <Navbar />
              </Route>
            </Switch>
          </View>
        </BackButton>
      </NativeRouter>
    </StateContext.Provider>
  )
}

export default App
