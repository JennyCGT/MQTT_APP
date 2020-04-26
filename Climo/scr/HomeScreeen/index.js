import React, { Component } from 'react';
import { ImageBackground,View,Image,ViewStatusBar, StyleSheet } from 'react-native';
import {createDrawerNavigator,DrawerItemList} from '@react-navigation/drawer';
import { Container, Header, Content, H1, H2, H3, Text } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import s from './style'
import Icon from 'react-native-vector-icons/Entypo'

function Menu(props){
  return(
    <View style ={s.container}>
      <View style ={s.bgContainer}>
        
          <View style={s.userContainer}>
            <Image style={s.userImagen2} source ={require('../../assets/LOGOFINAL.png')}/>            
          </View>
          <View style ={s.userNombre}>
            <Text style={s.userTitulo}>Climate Monitoring</Text>
          </View>

      </View>
      <DrawerItemList {...props}/>
    </View>
  )
}
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={(props)=> <Menu {...props}/>}
        drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: { marginVertical: 30 },
      }}
           screenOptions={({ route }) => ({
        drawerIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Temperature') {
            iconName = 'thermometer';
            
          } else if (route.name === 'Air quality') {
            iconName ='air';
          }else if (route.name === 'Humedity') {
            iconName ='drop';
          } else if (route.name === 'About us') {
            iconName ='info-with-circle';
          }else if (route.name === 'Log out') {
            iconName ='log-out';
          }

          // You can return any component that you like here!
          return <Icon  name= {iconName}
          type='entypo'
          size={20}
          color={color} />;
        },
      })}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />

    </Drawer.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function MyTab() {
    return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
    );
  }

export default class TypographyExample extends Component {
  render() {
    return (
        <NavigationContainer>
            <MyDrawer />
        </NavigationContainer>
    );
  }
}