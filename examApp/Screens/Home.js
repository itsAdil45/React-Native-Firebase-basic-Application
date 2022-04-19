import { Text, View, FlatList, TouchableOpacity , Button} from 'react-native'
import React, { Component } from 'react'
import database from '@react-native-firebase/database';



export default class Home extends Component {

  state={
    Data:[]
  }

    componentDidMount(){
        database().ref('/universities/')
        // .ref('/Data/Students').limitToFirst(3)
        // .ref('/Data/Students').limitToLast(3)
        // Comment Out FlatList Before un commenting below line
        // .ref('/Data/Students').orderByChild("status").equalTo("pass")  
        .on('value', snapshot => {
          this.setState({Data:snapshot.val()})  
        });
    
    }


  
  render() {
    return (
      <View  style={{backgroundColor:"lightgrey"}}>
        {/* <View>
        <Button title='Add Record' onPress={()=>this.props.navigation.navigate("Insert")}/>
        </View> */}
        <Text style={{fontSize:22,margin:2, width:"100%", textAlign:'center', padding:10, }}>Check Record of Students</Text>
        <FlatList
          data={this.state.Data}
          renderItem={({item})=>(
            <View style={{backgroundColor:"blue"}}>

          <View style={{flex:1 , justifyContent:'center', alignItems:'center'  ,borderBottomColor:"white", borderWidth:2}}>
            <Text style={{color:"white" , marginTop:10, fontSize:18}}>Name: {item.name}</Text>
            <Text style={{color:"white", fontSize:18}}>contact: {item.contact}</Text>
            <Text style={{color:"white", fontSize:18}}>Fee: {item.fee}</Text>
            <Text style={{color:"white", fontSize:18}}>Location: {item.location}</Text>
            <Text style={{color:"white", fontSize:18}}>Ranking: {item.ranking}</Text>      
            </View>

        </View>)}
        />

      
      </View>
    )
  }
}