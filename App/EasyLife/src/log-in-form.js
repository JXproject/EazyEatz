import React,{Component} from 'react';
import {  StyleSheet, View,TextInput,TouchableOpacity,Text,StatusBar } from 'react-native';

export default class LoginForm extends Component{
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
      style={styles.input}
      ref={(input)=> this.passwordInput =input}
      />

      <TouchableOpacity style={styles.btnContainer}>
      <Text style={styles.btnText}> LOGIN </Text>
      </TouchableOpacity>
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
