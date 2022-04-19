import { Text, View, TextInput , Button} from 'react-native'
import React, { Component } from 'react'
import database from '@react-native-firebase/database';
export default class Insert extends Component {
  state = {
    name: "",
    ranking: "",
    fee: "",
    contact:"",
    location:"",
    arrLength:[],
    length:0
  }
  componentDidMount(){
    database().ref(`/universities/`)
    .on('value', snapshot => {
      this.setState({arrLength:snapshot.val()})
      this.setState({length:this.state.arrLength.length-1});
    });
  }
  
  insertData = () => {
    database().ref(`/universities/${this.state.length+1}`).set({
      name:this.state.name,
      ranking:this.state.ranking,
      fee:this.state.fee ,
      contact:this.state.contact,
      location:this.state.location
    
    }).then(()=>console.log("inserted"))

  }
  render() {
    return (
      <View>
        <TextInput placeholder='name' value={this.state.name} onChangeText={(value)=>this.setState({name:value})}/>
        <TextInput placeholder='ranking'value={this.state.ranking} onChangeText={(value)=>this.setState({ranking:value})}  />
        <TextInput placeholder='fee' value={this.state.fee} onChangeText={(value)=>this.setState({fee:value})} />
        <TextInput placeholder='contact' value={this.state.contact} onChangeText={(value)=>this.setState({contact:value})} />
        <TextInput placeholder='location' value={this.state.location} onChangeText={(value)=>this.setState({location:value})} />
        <Button title='Submit' onPress={this.insertData}/>
      </View>
    )
  }
}