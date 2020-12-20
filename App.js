import React, { useState } from 'react'
import { NativeRouter, BackButton } from 'react-router-native'
import StateContext from './context/StateContext'
import ConnectLogin from './pages/ConnectLogin'

const App = () => {
  const initialState = {
    itemSearchTerm: '',
    items: null,
    user: null,
  }
  const contextHook = useState(initialState)

  return (
    <StateContext.Provider value={contextHook}>
      <NativeRouter>
        <BackButton>
          <ConnectLogin/>
        </BackButton>
      </NativeRouter>
    </StateContext.Provider>
  )
}

export default App
