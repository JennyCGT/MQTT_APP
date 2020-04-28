import React, { Component } from "react";
import { ImageBackground,View } from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Text,
  Card,
  CardItem
} from "native-base";
import style from './style';
import Icon from 'react-native-elements';
class Header1 extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <Container>
        <Header style={style.header}>
          <Left>
          <Button
                transparent
                onPress={() => this.props.navigation.goBack()}
                >
                <Icon name="arrow-back" />
            </Button> 

          </Left>
          <Body>
            <Title>About US</Title>
          </Body>
          <Right>
          </Right>
        </Header>
        <Content padder>
          
          <Card>
            <CardItem header bordered>
              <Text> CLIMON </Text>
            </CardItem>
            <CardItem>
              <Text> CLIMON its an aplication where you can monitore in real time 
                environment variables such as temperature, humidity and air quality.
                In setting option let you modify broker addres, UserID and password.                
              </Text>
            </CardItem>       
              <CardItem footer bordered>
              <Text>Created by Jenny 
                More info: https://github.com/JennyCGT</Text>
            </CardItem>
          </Card>
          <Button onPress={() => this.props.navigation.goBack()}>
            <Text>Back</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Header1;
