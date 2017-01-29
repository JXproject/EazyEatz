import React,{Component} from 'react';
import {  StyleSheet, View,TextInput,TouchableOpacity,Text,StatusBar,Modal } from 'react-native';
import Menu from './menu.js';

export default class LoginForm extends Component{
  constructor(props) {
    super(props);
    this.state = { password: "0000",modalVisible: false,text: ''};
  }

  setModalVisible(visible) {
    if(this.state.text==this.state.password)
      this.setState({modalVisible: visible});
  }

  render(){
    return (
      <View style={styles.container}>
      <StatusBar barStyle="dark-content"/>
      <TextInput
      placeholder="username or email"
      plaeholderTextColor="rgba(255,255,255,0.7)"
      returnKeyType="next"
      onSubmitEditing={()=>this.passwordInput.focus()}
      keyboardType="email-address"
      autoCapitialize="none"
      autoCorrect={false}
      style={styles.input}
      />
      <TextInput placeholder="password"
      plaeholderTextColor="rgba(255,255,255,0.7)"
      returnKeyType="go"
      secureTextEntry
      onChangeText={(text) => this.setState({text})}
      value={this.state.text}
      style={styles.input}
      ref={(input)=> this.passwordInput =input}
      />


      <TouchableOpacity
      onPress={() => {
        this.setModalVisible(true)
      }}
      style={styles.btnContainer}>
      <Text style={styles.btnText}> LOGIN </Text>
      </TouchableOpacity>


      <Modal
      animationType={"fade"}
      transparent={false}
      visible={this.state.modalVisible}
      onRequestClose={() => {alert("Modal has been closed.")}}
      >
      <Menu/>
      </Modal>
      </View>


    );
  }
}

const styles =StyleSheet.create({
  container:{
    padding:20
  },
  input:{
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom:10,
    color:'black',
    paddingHorizontal: 10
  },
  btnContainer:{
    backgroundColor:'#2980b9',
    paddingVertical:15
  },
  btnText:{
    textAlign: 'center',
    color:'#FFFFFF',
    fontWeight:'700'
  }
});
