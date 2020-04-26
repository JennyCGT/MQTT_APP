import React, { Component } from 'react';
import { ImageBackground,View,Image,ViewStatusBar, StyleSheet, Settings } from 'react-native';
import {createDrawerNavigator,DrawerItemList} from '@react-navigation/drawer';
import { Container, Header, Content, H1, H2, H3, Text } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import s from './style'
import {  Icon } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';

import About from '../About/index'
import Setting from '../SettingsS/index'

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

          if (route.name === 'Home') {
            iconName = 'home';
            
          } else if (route.name === 'About') {
            iconName ='info';
          }else if (route.name === 'Setting') {
            iconName ='tools';
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
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Setting" component={Setting} />

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

  const Stack = createStackNavigator();
function Slide(){
  return(      
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);  
}
 

export default class TypographyExample extends Component {
  render() {
    return (
        //<NavigationContainer>
            <MyDrawer />
        //</NavigationContainer>
    );
  }
}