import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default function About ({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>About Screen</Text>
        <Button title= "Go Details" 
          onPress={() => navigation.push('Principal')}
          />
      </View>
    );
  }