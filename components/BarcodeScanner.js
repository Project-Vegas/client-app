import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native'
import { Redirect } from 'react-router-native'
import * as Permissions from 'expo-permissions'

import { BarCodeScanner } from 'expo-barcode-scanner'
import { theme } from '../styles/theme'
import Container from './Container'

const BarcodeScannerExample = () => {
  const [state, setState] = useState({
    hasCameraPermission: null,
    scanned: false,
    itemId: null,
  })

  const handleBarCodeScanned = ({ data }) => {
    setState({
      ...state,
      scanned: true,
      itemId: data,
    })
  }

  useEffect(() => {
    const fn = async() => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      setState({
        ...state,
        hasCameraPermission: status === 'granted'
      })
    }
    fn()
  }, [])

  const { hasCameraPermission, scanned } = state;

  if (hasCameraPermission === null) {
    return (
      <Container>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </Container>
    )
  }
  if (hasCameraPermission === false) {
    return (
      <Container>
        <Text>No access to camera. Please allow camera access in settings to scan barcodes.</Text>
      </Container>
    )
  }

  if (scanned) {
    return <Redirect to={`/item/${state.itemId}`} />
  }

  return (
    <View style = {{
      flex: 1,
      justifyContent: 'center',
    }}>
    {
      !scanned && (
        <BarCodeScanner onBarCodeScanned = {handleBarCodeScanned}
        style = {
          StyleSheet.absoluteFillObject
        } />
      )
    }
    </View>
  );
}

export default BarcodeScannerExample
