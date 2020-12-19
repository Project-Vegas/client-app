import React from 'react'

const StateContext = React.createContext([{
  itemSearchTerm: '',
  dateFrom: '',
  dateTo: '',
  items: [],
  updates: [],
  user: null,
}, () => {}])
export default StateContext
