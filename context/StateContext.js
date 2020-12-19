import React from 'react'

const StoreContext = React.createContext([{
  itemSearchTerm: '',
  dateFrom: '',
  dateTo: '',
  items: [],
  updates: [],
}, () => {}])
export default StoreContext
