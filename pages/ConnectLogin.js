import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Route, Switch } from 'react-router-native'

import Navbar from '../components/Navbar'
import Home from './Home'

import BarCodeScannerExample from '../components/BarcodeScanner'
import AddItemPage from './AddItemPage'
import UpdateHistory from './UpdateHistory'
import Sales from './Sales'
import Item from './Item'
import Login from './Login'
import StateContext from '../context/StateContext'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

const ConnectLogin = () => {

  const [state, _] = useContext(StateContext)

  if (!state.user) {
    return (
      <Login />
    )
  }

  return (
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
  )
}

export default ConnectLogin
