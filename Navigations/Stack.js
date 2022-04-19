import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Home from '../Screens/Home'
import Login from '../Screens/Login'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Insert from '../Screens/Insert';
const stack =createNativeStackNavigator()
export default class Stack extends Component {
  render() {
    return (
      <stack.Navigator>
          <stack.Screen name='Login' component={Login}/>
       
          <stack.Screen name='Home' component={Home}/>

          <stack.Screen name='Insert' component={Insert}/>
      </stack.Navigator>
    )
  }
}