import React,{Component} from 'react';
import {  StyleSheet, View,Text,Button} from 'react-native';

export default class Menu extends Component{
  render(){
    return(
      <View style={styles.container}>

      <View style={styles.statusbar}>
      </View>
      <View style={styles.restName}>
      <Text style={{ fontSize:30, fontFamily:"GillSans-SemiBold"}}>
      Family Risto</Text>
      </View>

      <View style={styles.line}>
      </View>
      <View style={styles.nav}>
      <Text style={{fontSize:20, fontFamily:"GillSans-Light"}}> MENU </Text>
      </View>

      <View style={styles.lineLight}>
      </View>
      <View style={styles.list}>

      </View>

      <View style={styles.lineLight}>
      </View>
      <View style={styles.footer}>
      <Text style={{width:80, fontSize:18, fontWeight:"200"}}> TOTAL: $ </Text>
      <Text style={{width:120, fontSize:18, fontWeight:"200"}}> 00.00 </Text>
      <Button
      onPress={this.onPressLearnMore}
      title="OVERVIEW"
      color="black"
      />
      </View>

      </View>
    );
  }
}
const styles =StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#FAF9F7'
  },

  statusbar:{
    height:20,
    backgroundColor:'#FAF9F7'
  },

  restName:{
    justifyContent: 'center',
    alignItems: 'center',
    height:50,
    backgroundColor:'#FAF9F7',
  },
  line:{
    height:2,
    backgroundColor:"black",
    marginLeft:10,
    marginRight:10,
  },
  lineLight:{
    height:1,
    backgroundColor:"#D1D1D1",
    marginLeft:60,
    marginRight:60,
  },
  nav:{
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor:'#FAF9F7',
  },
  list:{

    flex:1,
    backgroundColor:'#FAF9F7'
  },
  footer:{
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
    height:60,
    backgroundColor:'#FAF9F7'
  },

});
