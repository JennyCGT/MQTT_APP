import React, { Component } from 'react';
import { ImageBackground,View,Image,ViewStatusBar, StyleSheet, Settings } from 'react-native';
import { Container, Header, Content, H1, H2, H3, Text } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import {  Icon } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';

import Login from'./Login'
import HomeScreen from '../HomeScreeen/index'

const Stack = createStackNavigator();

function Slide(){
  return(      
    <Stack.Navigator initialRouteName="Login" headerMode='none'>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={HomeScreen} options={{
          gestureEnabled: false,
        }}/>
  </Stack.Navigator>
);  
}

export default class TypographyExample extends Component {
    render() {
      return (
          <NavigationContainer>
              <Slide />
          </NavigationContainer>
      );
    }
  }