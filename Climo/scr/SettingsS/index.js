import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Text
} from "native-base";
import {Icon} from "react-native-elements"
import style from'./style'

class Setting extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <Container>
        <Header style={style.header}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name ="arrow-back"/>
            </Button> 
          </Left>
          <Body>
            <Title>SETTINGS</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
            
        </Content>
      </Container>
    );
  }
}

export default Setting;
