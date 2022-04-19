import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import database from '@react-native-firebase/database';
export default class Login extends Component {
  state={
    user:[],
    username:"",
    pass:""
  }
  componentDidMount(){
      database().ref('/User/')
      .on('value', snapshot => {
        this.setState({user:snapshot.val()})
        
      });
  
  }

  onPress = () => {
    this.state.user.map((item)=>{
      
      if(this.state.username=="admin" &&  this.state.username==item.username && this.state.pass=="admin" &&  this.state.pass==item.username){
     this.props.navigation.navigate("Insert")
      }
     else if(this.state.username=="user" &&  this.state.username==item.username && this.state.pass=="user" &&  this.state.pass==item.username){
      this.props.navigation.navigate("Home")
      }
    })
  };

  render() {
    return (
      <View>
     

        <Text style={styles.logo}>Logo</Text>
        <View style={styles.inputs}>
     
    
        <TextInput placeholder='Username' value={this.props.username} onChangeText={(val)=>this.setState({username:val})}/>
        <TextInput placeholder='Password' value={this.props.pass} onChangeText={(val)=>this.setState({pass:val})}/>
        </View>

         <View>

        <TouchableOpacity onPress={this.onPress} style={styles.btn}>
        <Text>Login</Text>
        </TouchableOpacity>

         </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
logo:{
textAlign:'center',
backgroundColor:"grey",
fontSize:40
},
inputs:{
margin:20

}
,
btn:{
marginLeft:155

}






})