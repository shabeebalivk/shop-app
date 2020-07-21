import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { enableScreens } from 'react-native-screens'

import MainNavigator from './navigation/ShopsNavigator'


enableScreens();
export default function App() {
  return (
    <View style={styles.container}>
      <MainNavigator />
    </View>
  )}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})
