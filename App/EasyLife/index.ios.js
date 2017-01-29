import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Login from './src/log-in.js';
 
export default class EasyLife extends Component {

  render() {
    return (
      <Login />
    );
  }
}


const styles = StyleSheet.create({

});

AppRegistry.registerComponent('EasyLife', () => EasyLife);
