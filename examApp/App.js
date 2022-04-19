import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Stack from './Navigations/Stack'


export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
      <Stack/>
      </NavigationContainer>
    )
  }
}