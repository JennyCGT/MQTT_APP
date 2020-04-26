import React from "react";
import { ImageBackground,View,Image,ViewStatusBar, StyleSheet } from 'react-native';
import {Tabs, Tab,TabHeading,ScrollableTab,Segment, Button,Container, Header, Title, Left, Right,  Body, Content,Text, Card, CardItem, Subtitle } from "native-base";
import Icon from 'react-native-vector-icons/Entypo'
import styles from './style';  
import TabOne from "./Tab_temperature";
import TabTwo from "./Tab_Humidity";
import TabThree from "./Tab_air_quality";
import { Tile } from "react-native-elements";

const logo = require("../../assets/icono.png");


export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
        <Container >
            <Header span hasTabs style={styles.header} >
            <Left>
                
                <Button
                transparent
                onPress={() => this.props.navigation.openDrawer()}
                >
                <Icon name="menu" />
                </Button>
            </Left>
            <Body>
                <Title>WELCOME BACK</Title>
                <Subtitle></Subtitle    >
                <Subtitle>ENJOY YOUR VISIT</Subtitle    >
            </Body>
            <Right>
                <View style={styles.container}>
                    <ImageBackground source={logo} style={styles.image}>
                    </ImageBackground>
                </View>                

            </Right>

            </Header>
              

        <Tabs  renderTabBar={() => <ScrollableTab />} >
            <Tab style={{backgroundColor:'#232C33'}} heading={
              <TabHeading style={{backgroundColor: '#008b8b'}}
              >
                <Text>TEMPERATURE</Text>
              </TabHeading>}>
                <TabOne />
            </Tab>
            <Tab  style={{backgroundColor:'#232C33'}} heading={ 
              <TabHeading style={{backgroundColor: '#008b8b'}}>
                <Text>HUMIDITY</Text>
              </TabHeading>}>
                <TabTwo />
            </Tab>
            <Tab style={{backgroundColor:'#232C33'}} heading={
              <TabHeading style={{backgroundColor: '#008b8b'}}>
                <Text>AIR QUALITY</Text>
              </TabHeading>}>
                <TabThree />
            </Tab>
        </Tabs>
       </Container>
        );
    }
}
