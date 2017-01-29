import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  ListView
} from 'react-native';

import api from './apicall'; // change to actualy api location ..... <--

class APIRequest extends Component {

  constructor() {
    super();

    this.state = {
      users: [], //change to actual data
      id: [],
      type: []
    }
  }

  componentWillMount() {

      api.getData()
        .then((res) => {
          this.setState({
            users: res
          })
          for (var i = 0; i < this.state.users.length; i++) {
            this.state.id.push(this.state.users[i].id);
            this.state.type.push(this.state.users[i].type);
      });
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.buttonText}>
          {this.state.id}
        </Text>
      </View>
    );
  }
}
