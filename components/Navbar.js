import React from 'react'
import { View, StyleSheet } from 'react-native'
import { faHome, faPlus, faHistory, faChartLine } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-native'

import Button from './Button'
import { theme } from '../styles/theme'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: '100%',
    height: '12%',
    maxHeight: 70,
    minHeight: 70,
    position: 'absolute',
    bottom: 0,
    backgroundColor: theme.colors.primary,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
})

const navItems = [{
  title: 'Home',
  link: '/',
  icon: faHome,
}, {
  title: 'Add',
  link: '/additem',
  icon: faPlus,
}, {
  title: 'History',
  link: '/history',
  icon: faHistory,
}, {
  title: 'Sales',
  link: '/sales',
  icon: faChartLine,
}]

export default function Navbar() {
  const history = useHistory()

  return (
    <View style={styles.container}>
      {
        navItems.map((item, index) => (
          <Button key={index} onPress={() => { history.push(item.link) }} icon={item.icon} />
        ))
      }
    </View>
  )
}
