import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Appbar from './components/Appbar';
import Container from './components/Container';

export default function App() {
  return (
    <Container>
      <Appbar>
        <Text>Hello World</Text>
      </Appbar>
    </Container>
  );
}
