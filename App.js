import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { NativeRouter, Route, Switch, BackButton } from 'react-router-native'
import StateContext from './context/StateContext'

import Navbar from './components/Navbar'
import Home from './pages/Home'

import BarCodeScannerExample from './components/BarcodeScanner'
import AddItemPage from './pages/AddItemPage'
import UpdateHistory from './pages/UpdateHistory'
import Sales from './pages/Sales'
import Item from './pages/Item'

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
                <UpdateHistory />
                <Navbar />
              </Route>
              <Route path='/sales'>
                <Sales />
                <Navbar />
              </Route>
              <Route path='/scan'>
                <BarCodeScannerExample />
              </Route>
              <Route path='/item/:id'>
                <Item />
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
