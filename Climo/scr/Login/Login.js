import React, { Component } from "react";
import{View,Image} from 'react-native'
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Item,
  Label,
  Input,
  Body,
  Left,
  Right,
  Form,
  Text
} from "native-base";
import s from "./styles";
import {  Icon } from 'react-native-elements';


class FloatingLabel extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
        <Container style={s.container}>
        <Header style={s.header}>
            <Left/>
          <Body>
            <Title style={{color:'#FFF'}}>LOGIN</Title>
          </Body>
          <Right />
        </Header>

        <Content>
            <View style ={s.bgContainer}>        
                <View style={s.userContainer}>
                <Image style={s.userImagen2} source ={require('../../assets/LOGOFINAL.png')}/>            
                </View>
                <View style ={s.userNombre}>
                <Text style={s.userTitulo}>Climate Monitoring</Text>
                </View>
            </View>   
          <Form>
            <Item fixedLabel>
              <Icon name="cloud" type="entypo" size={17}></Icon>
              <Label style={{color:'#000'}} >   Broker</Label>
              <Input placeholde="Icon Alignment in Textbox"/>
            </Item>
            <Item >
              <Icon name="user" type="entypo" size={17}></Icon>
              <Label style={{color:'#000'}} >   User</Label>
              <Input />
            </Item>
            <Item >
              <Icon name="key" type="entypo" size={17}></Icon>
              <Label style={{color:'#000'}} >   Password</Label>
              <Input />
            </Item>
          </Form>
          <Button block style={s.button}
            onPress={()=> this.props.navigation.navigate("Home")}
          >
            <Text style={{color:'#FFF', fontSize:18}}>Sign In</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default FloatingLabel;