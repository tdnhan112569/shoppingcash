import React from 'react';
import { StyleSheet, Text, View , Image, Button, Dimensions, TouchableOpacity} from 'react-native';

var {height, width} = Dimensions.get('window');

const char = `<>`

export default class ItemProduct extends React.Component {
    render() {
      const {item} = this.props
      return (
        <View style={{margin:10, alignItems:'center',
         justifyContent:'center', 
         borderColor:'white',
        borderRadius:0.5,
          shadowColor:'gray', shadowOpacity:0.5,
           shadowOffset:{  width: 10,  height: 0  },
            shadowRadius: 2,
              elevation: 3}}> 
            <Text style={{fontSize:25, marginBottom: 10, color: 'rgb(67, 72, 77)', fontWeight: "bold", marginTop: 20}}>{this.props.item.name}</Text>
            <Image 
                style={{height:height /3, width:width * 0.8, marginBottom:10, borderRadius:0.5}}
                source={{uri: this.props.item.uri }}
                resizeMode='cover'
            />
            <Text style={{fontSize:20, marginBottom: 5, color:'black'}}>{this.props.item.type}</Text>
            <Text style={{fontSize:30, marginBottom: 5, color:'red', fontWeight: "bold"}}>{item.price * 0.8}$</Text>
            <Text style={{fontSize:20, marginBottom: 5, color:'gray', textDecorationLine:'line-through'}}>{this.props.item.price}$</Text>
            <TouchableOpacity style={{height:50, width:width * 0.7, alignItems:'center', justifyContent:'center',backgroundColor:'red', marginBottom: 20 }}>
                 <Text style={{fontSize:20, fontWeight: "bold", color:'white'  }}>{char} VIEW NOW</Text>
            </TouchableOpacity>
        </View>
      );
    }
  }
