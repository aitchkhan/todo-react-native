/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { AppRegistry, Text, Image, View } from 'react-native';

class Greetings extends Component {
    render() {
    return (
    <Text>Hello! {this.props.name}</Text>
    );
    }
}

class HelloWorldApp extends Component {
  render() {
  let pic = {
  uri: 'http://192.168.1.70/buybye-platform/uploads/image-1480059523382.png'
  };
    return (
      <View style={{alignItems:'center'}}>
      <Image source={pic} style={{width:150, height: 150}}/>
      <Greetings name="Haroon"/>
      <Greetings name="Ayaz"/>
      <Greetings name="Estes"/>
      </View>
    );
  }
}



AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);