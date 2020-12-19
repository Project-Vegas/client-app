import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-native'

import { categoryToIconMap } from '../utils/categoryToIconMap'
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
  },
  icon: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.itemIconBackground,
    borderRadius: 50,
    width: 60,
    height: 60,
  },
  text: {
    paddingLeft: 15,
    width: '75%'
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

export default function ItemCard({ item }) {
  const history = useHistory()

  return (
    <View style={styles.root}>
      <View style={styles.icon}>
        <FontAwesomeIcon
          icon={categoryToIconMap[item.category]}
          size={theme.fontSize.medium}
          color={theme.colors.black}
        />
      </View>
      <View style={styles.text}>
        <Text style={styles.title}>
          {item.name}
        </Text>
        <View>
          <Text style={styles.description}>
            {item.description}
          </Text>
          <Text style={styles.description}>
            ₹{item.price} | {item.quantity} units available
          </Text>
        </View>
      </View>
      <View>
        <TouchableWithoutFeedback onPress={() => {
          history.push(`/item/${item.product_id}`)
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
