import React,{Component} from 'react';
import {  StyleSheet, View,Text,Button,Modal,TouchableHighlight,} from 'react-native';

import Listcard from './ListCard';
import Total from './ListCard';

var ccccrd=<Listcard/>;

var cds=0;
export default class Menu extends Component{
  constructor(props) {
    super(props);
    this.state = { total: "00.00",modalVisible: false};
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

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
      {ccccrd}
      </View>

      <View style={styles.lineLight}>
      </View>
      <View style={styles.footer}>
      <Text style={{width:80, fontSize:18, fontWeight:"200"}}> TOTAL: $ </Text>
      <Text style={{width:120, fontSize:18, fontWeight:"200"}}> {this.state.total} </Text>

      <Button
      onPress={() => {
        this.setModalVisible(true)
      }}
      title="OVERVIEW"
      color="black"
      />
      </View>

      <Modal
      animationType={"fade"}
      transparent={false}
      visible={this.state.modalVisible}
      onRequestClose={() => {alert("Modal has been closed.")}}
      >
        <View style={{marginTop: 22}}>
        </View>
        <View style={styles.statusbar}>
        </View>
        <View style={styles.restName}>
        <Text style={{ fontSize:30, fontFamily:"GillSans-SemiBold"}}>
      Family Risto</Text>
        </View>

        <View style={styles.line}>
        </View>
        <View style={styles.nav}>
      <Text style={{fontSize:20, fontFamily:"GillSans-Light"}}> SELECTED </Text>
        </View>

        <View style={styles.lineLight}>
        </View>
        <View style={styles.list}>
        {ccccrd}
        </View>

        <View style={styles.lineLight}>
        </View>
      <View style={styles.footer}>
      <Text style={{width:80, fontSize:18, fontWeight:"200"}}> TOTAL: $ </Text>
      <Text style={{width:80, fontSize:18, fontWeight:"200"}}> {this.state.total} </Text>

      <Button
      onPress={() => {
        this.setModalVisible(!this.state.modalVisible)
      }}
      title="CLOSE"
      color="black"
      />

        <Text style={{marginLeft: 20, width:80, fontSize:18, fontWeight:"200"}}>CONFIRM</Text>
      </View>
      </Modal>

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
