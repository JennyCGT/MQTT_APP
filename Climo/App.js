/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'

import LOGIN from './scr/scenes/Principal'

export default class App extends Component {
  render(){
    return (
      <LOGIN />
    );
  }
}

