import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronRight, faBarcode, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-native'

import { theme } from '../styles/theme'

const styles = StyleSheet.create({
  root: {
    width: '100%',
    borderBottomColor: theme.colors.gray,
    borderBottomWidth: 1,
    marginBottom: 0,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 8,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: theme.fontSize.medium,
    color: theme.colors.black,
  },
  newItemText: {
    fontSize: 10,
    color: theme.colors.black,
  },
  newItemLabel: {
    borderWidth: 1,
    borderColor: theme.colors.black,
    marginLeft: 10,
    padding: 0,
    justifyContent: 'center',
    paddingHorizontal: 5,
    borderRadius: 15,
  },
  price: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '50%',
  },
  description: {
    fontSize: theme.fontSize.small,
    color: theme.colors.textPrimary,
  },
  textRed: {
    color: theme.colors.red,
  },
  textGreen: {
    color: theme.colors.green,
  },
  textBlue: {
    color: theme.colors.blue,
  },
  textGray: {
    color: theme.colors.textLight,
  },
})

export default function UpdatesCard({ update }) {
  const history = useHistory()

  return (
    <View style={styles.root}>
      <View style={styles.text}>
        <View style={{ display: 'flex', flexDirection: 'row', }}>
          <Text style={styles.title}>
            {update.name}
          </Text>

          {
            update.qty_change == 0 && Number(update.old_price) - Number(update.new_price) === 0 &&
            <View style={styles.newItemLabel}>
              <Text style={styles.newItemText}>
                New Item
              </Text>
            </View>
          }
        </View>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <FontAwesomeIcon icon={faBarcode} size={20} color={theme.colors.black} style={{ marginRight: 10 }} />
            <Text style={styles.description}>
              {update.product_id}
            </Text>
          </View>
          {
            Number(update.old_price) - Number(update.new_price) !== 0 ?
              (
                <View style={styles.price}>
                  <Text>₹{update.old_price}</Text>
                  <FontAwesomeIcon icon={faArrowRight} size={12} color={theme.colors.textPrimary} />
                  <Text>₹{update.new_price}</Text>
                </View>
              )
              : <View style={styles.price}>
                  <Text>₹{update.new_price}</Text>
                </View>
          }
          {
            update.qty_change !== "0" ?
              <Text style={[styles.description, update.qty_change < 0 ? styles.textRed : styles.textGreen]}>
                Qty. Change: {update.qty_change}
              </Text>
            : null
          }
          <Text style={[styles.description, styles.textBlue]}>
            Qty available: {update.qty_available}
          </Text>
          <Text style={[styles.description, styles.textGray]}>
            Updated at {update.updated_at}
          </Text>
        </View>
      </View>
      <View>
        <TouchableWithoutFeedback onPress={() => {
          history.push(`/item/${update.product_id}`)
        }}>
          <View>
            <FontAwesomeIcon
              icon={faChevronRight}
              size={26}
              color={theme.colors.textPrimary}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  )
}
