import React,{Component} from 'react';
import {  StyleSheet,KeyboardAvoidingView, View,Image,Text,} from 'react-native';
import LoginForm from './log-in-form';

export default class Login extends Component{
  render(){
    return(
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <View style={styles.logoContainer}>
            <Image
            style={styles.logo}
            source={require("../src/img/banana.png")}
            />
            <Text style={styles.title}> Idea Destroyed Here </Text>
          </View>
          <View style={styles.formContainer}>
              <LoginForm/>
          </View>
      </KeyboardAvoidingView>
    );
  }
}
const styles =StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#3498db'
  },
  logoContainer:{
    alignItems:'center',
    flexGrow:1,
    justifyContent:'center'
  },
  logo:{
    width:100,
    height:100
  },
  title:{
    color:'#FFF',
    marginTop:10,
    width:160,
    textAlign:'center',
    opacity:0.9
  }
});
