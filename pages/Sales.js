import React, { useEffect, useContext } from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'

import { theme } from '../styles/theme'
import AppbarSearch from '../components/AppbarSearch'
import Container from '../components/Container'
import SalesCard from '../components/SalesCard'
import StyledScrollView from '../components/StyledScrollView'

import StateContext from '../context/StateContext'
import DatePicker from '../components/DatePickerComponent'

const styles = StyleSheet.create({
  total: {
    alignItems: 'center',
  },
  totalText: {
    fontSize: theme.fontSize.medium,
  },
})

const findTotalById = (sales) => {
  let salesToShow = [], totalSales = 0
  // Group items having same id.
  for (let i = 0; i < sales.length; i++) {

    let found = false;

    for (let j = 0; j < salesToShow.length; j++) {
      if (salesToShow[j].product_id == sales[i].product_id) {
        found = true;
        let amount = Number(sales[i].new_price) * (-Number(sales[i].qty_change))
        salesToShow[j].total_price += amount
        salesToShow[j].qty += Number(sales[i].qty_change)
        totalSales += amount
        break;
      }
    }
    if (!found) {
      let amount = Number(sales[i].new_price) * (-Number(sales[i].qty_change))
      salesToShow.push({
        name: sales[i].name,
        total_price: amount,
        qty: Number(sales[i].qty_change),
        product_id: sales[i].product_id,
      })
      totalSales += amount
    }
  }
  return { salesToShow, totalSales }
}

export default function Sales() {
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

  let salesToShow = [], totalSales = 0
  if (state.updates) {
    let sales = state.updates.filter(update => {
      const updateDate = Date.parse(update.updated_at.split(' ')[1])
      const parsedFrom = Date.parse(state.dateFrom)
      const parsedTo = Date.parse(state.dateTo)
      if (isNaN(parsedFrom) || isNaN(parsedTo))
        return update.qty_change < 0

      return (update.qty_change < 0) && (parsedFrom <= updateDate && parsedTo >= updateDate)
    })
    const res = findTotalById(sales)
    salesToShow = res.salesToShow
    totalSales = res.totalSales
  }
  if (salesToShow && state.itemSearchTerm.length > 0 && isNaN(Number(state.itemSearchTerm))) {
    salesToShow = salesToShow.filter(i =>
      i.name.toLowerCase().includes(state.itemSearchTerm)
    )
  } else if (salesToShow && state.itemSearchTerm.length > 0) {
    salesToShow = salesToShow.filter(i =>
      i.product_id.includes(state.itemSearchTerm)
    )
  }
  return (
    <Container>
      <AppbarSearch />
      {
        state.updates ?
        <StyledScrollView>
          <DatePicker />
          {
            salesToShow.length > 0 ?
              salesToShow.map((item, index) => (
                <SalesCard key={index} record={item} />
              ))
            :
            <View>
              <Text style={theme.titleText}>No sales records found</Text>
            </View>
          }
          <View style={styles.total}>
            <Text style={styles.totalText}>{`Total sales amount = ₹${totalSales}`}</Text>
          </View>
        </StyledScrollView>
        : <ActivityIndicator size="large" color={theme.colors.primary} />
      }
    </Container>
  )
}
