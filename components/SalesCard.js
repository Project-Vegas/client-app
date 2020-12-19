import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBarcode } from '@fortawesome/free-solid-svg-icons'

import { theme } from '../styles/theme'

const styles = StyleSheet.create({
  root: {
    width: '100%',
    borderBottomColor: theme.colors.gray,
    borderBottomWidth: 1,
    marginBottom: 0,
    padding: 15,
    alignItems: 'baseline',
    paddingLeft: 8,
  },
  title: {
    fontSize: theme.fontSize.medium,
    color: theme.colors.black,
  },
  description: {
    fontSize: theme.fontSize.small,
    color: theme.colors.textPrimary,
  },
})

export default function SalesCard({ record }) {

  return (
    <View style={styles.root}>
      <View>
        <Text style={styles.title}>
          {record.name}
        </Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <FontAwesomeIcon icon={faBarcode} size={20} color={theme.colors.black} style={{ marginRight: 10 }} />
        <Text style={styles.description}>
          {record.product_id}
        </Text>
      </View>
      <View>
        <Text style={styles.description}>
          {-record.qty} units sold for ₹{record.total_price}.
        </Text>
      </View>
    </View>
  )
}
