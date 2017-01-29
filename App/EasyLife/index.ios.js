import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
// import Login from './src/log-in.js';
 import Menu from './src/menu.js';
export default class EasyLife extends Component {
  render() {
    return (
      // <Login />
      <Menu />
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('EasyLife', () => EasyLife);
