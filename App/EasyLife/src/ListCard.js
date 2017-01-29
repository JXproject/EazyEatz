import React,{Component} from 'react';
import {  StyleSheet, View, Text, Button,ScrollView,Animated,AppRegistry} from 'react-native';

var list=[];
var data={name:"Bacon & Eggs", price: "9.99", description:"a dish consisting of fried or grilled slices of bacon and one or more fried eggs", ind:0};
list.push(data);
data={name: "French Onion Soup",price: "7.95", description: "A rich beef and onion broth, topped off with garlic croutons and melted swiss cheese", ind:1};
list.push(data);
data={name: "Tacos Carnitas",price: "10.99", description: "Two soft fresh corn tortillas filled with seasoned chunks of slow roasted pork, chopped onions & cilantro topped with roasted salsa verda", ind:2};
list.push(data);
data={name: "Pan Roasted Chicken Breast",price: "13.98", description: "garden greens, seasonal vegetables, toasted pumpkin seeds, grilled chicken, ranch dressing", ind:3};
list.push(data);
data={name:"Bacon & Eggs", price: "9.99", description:"a dish consisting of fried or grilled slices of bacon and one or more fried eggs", ind:4};
list.push(data);

var Total=[5];
Total.fill(0);

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {quantity:0,fadeAnim: new Animated.Value(0),totot:0};
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  getter(){
    return this.state.totot;
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
    Total[this.props.val.ind]=this.state.quantity;
    var ttt=Total[0]+Total[1]+Total[2]+Total[3]+Total[4];
      this.setState({totot:ttt});
  }
  decrement(){
    if(this.state.quantity>0)
    this.setState({quantity:this.state.quantity-1});
    Total[this.props.val.ind]=this.state.quantity;
    var ttt=0;
var ttt=Total[0]+Total[1]+Total[2]+Total[3]+Total[4];
      this.setState({totot:ttt});
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
  },
  outer:{
    height:10,
    backgroundColor:"green"
  }
});
AppRegistry.registerComponent('Lists', ()  => Listcard);
