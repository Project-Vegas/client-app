import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import DatePicker from 'react-native-datepicker'

import StateContext from '../context/StateContext'

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 20,
  }
})

export default function DatePickerComponent() {
  const [state, setState] = useContext(StateContext)
  return (
    <View style={styles.root}>
      <DatePicker
        style={{width: 150}}
        date={state.dateFrom}
        mode="date"
        placeholder="Select From Date"
        format="MM/DD/YYYY"
        minDate="01/01/2001"
        maxDate={state.dateTo}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
        }}
        onDateChange={(date) => {setState({...state, dateFrom: date })}}
      />

      <DatePicker
        style={{width: 150}}
        date={state.dateTo}
        mode="date"
        placeholder="Select To Date"
        format="MM/DD/YYYY"
        minDate={state.dateFrom}
        maxDate='12/31/2070'
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
        }}
        onDateChange={(date) => {setState({...state, dateTo: date })}}
      />
    </View>
  )
}
