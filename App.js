import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { NativeRouter, Route, Switch, BackButton } from 'react-router-native'
import StateContext from './context/StateContext'

import Navbar from './components/Navbar'

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
                <Text>Add item page</Text>
                <Navbar />
              </Route>
              <Route path='/history'>
                <Text>Updates page</Text>
                <Navbar />
              </Route>
              <Route path='/sales'>
                <Text>Sales page</Text>
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
                <Text>Home</Text>
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
