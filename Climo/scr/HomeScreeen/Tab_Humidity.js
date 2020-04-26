import React, { Component } from "react";
import { ImageBackground,View,Image,ViewStatusBar, StyleSheet } from 'react-native';
import { Content, Card, CardItem, Text, Body } from "native-base";
import styles from "./style"
import ProgressCircle from 'react-native-progress-circle'

export default class TabTwo extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <Content padder style={{backgroundColor: '#232C33'}}>

          <View style={styles.mb}>
            <View>
              <Text style={{ fontSize: 20,color:'#fff' }} > CURRENT HUMIDITY</Text>
             </View>
            <View style={styles.spin}>
                <ProgressCircle
                percent={30}
                radius={80}
                borderWidth={12}
                color="#008080"
                shadowColor="#999"
                bgColor="#DADFF7"
                outerCircleStyle={{marginTop:10,marginLeft:10}}
                >
                    <Text style={{ fontSize: 40 }}>{'25.5°'}</Text>
                </ProgressCircle>
            </View>
          </View>
          <View style={styles.mb}>
            <View>
              <Text style={{ fontSize: 20,color:'#fff'}} > AVERAGE HUMIDITY</Text>
             </View>
            <View style={styles.spin}>
                <ProgressCircle
                percent={30}
                radius={80}
                borderWidth={12}
                color="#008080"
                shadowColor="#999"
                bgColor="#DADFF7"
                outerCircleStyle={{marginTop:10,marginLeft:10}}
                >
                    <Text style={{ fontSize: 40 }}>{'25.5°'}</Text>
                </ProgressCircle>
            </View>
          </View>

      </Content>
    );
  }
}