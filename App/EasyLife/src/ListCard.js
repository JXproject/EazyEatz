import React,{Component} from 'react';
import {  StyleSheet, View,Text,Button,ScrollView,Animated} from 'react-native';


var list=[];
for(var i2=0;i2<6;i2++){
  var data={name:"Bacon & Eggs", price: "9.99", description:"a dish consisting of fried or grilled slices of bacon and one or more fried eggs", ind:i2};
  list.push(data);
}

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {quantity:0,fadeAnim: new Animated.Value(0)};
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {toValue: 1,duration: 400*this.props.val.ind, }
    ).start();
  }

  increment(){
    if(this.state.quantity<10)
      this.setState({quantity:this.state.quantity+1});
  }
  decrement(){
    if(this.state.quantity>0)
      this.setState({quantity:this.state.quantity-1});
  }

  render() {
    return (
      <Animated.View
      style={{opacity: this.state.fadeAnim}}>
      {this.props.children}

      <View style={styles.card}>
      <View style={styles.Title}>
      <Text style={{width: 220, fontSize:18, fontWeight:"500"}}>{this.props.val.name}</Text>
      <Text style={{ fontSize:14, fontWeight:"500"}}> $ {this.props.val.price}</Text>
      </View>
      <View style={styles.lineBreak}>
      </View>
      <View style={styles.Title}>
      <Text style={{ fontSize:10, fontWeight:"300"}}>{this.props.val.description}</Text>
      </View>

      <View style={styles.selection}>
      <Button
      onPress={this.decrement}
      title="-"
      color="black"
      />
      <Text style={{ marginTop:11,marginRight:2,fontSize:15, fontWeight:"400"}}>{this.state.quantity}</Text>
      <Button
      onPress={this.increment}
      title="+"
      color="black"
      />
      </View>
      </View>

      </Animated.View>
    );
  }
}

export default class Listcard extends Component{
  render(){
    return(
      <View style={styles.container}>
      <ScrollView>
      {list.map(function(row){
        return (<Card val={row} />)
      })}
      </ScrollView>
      </View>
    );
  }
}

const styles =StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#FAF9F7',
    alignItems: 'center',
    margin:3,
  },
  card:{
    margin:10,
    width: 300,
    height:110,
    backgroundColor:'white',
  },
  Title:{
    marginLeft: 10,
    marginTop: 10,
    height: 25,
    flexDirection:'row',
  },
  lineBreak:{
    marginTop:3,
    height:1,
    backgroundColor:"black",
    marginLeft:10,
    marginRight:10,
  },
  selection:{
    marginLeft:220,
    flexDirection:'row',
  }
});
