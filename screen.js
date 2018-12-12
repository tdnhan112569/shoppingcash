import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import {containerStyle} from './constants/styles'
import Header from './components/header/header'
import Body from './components/body/body'
import Footer from './components/footer/footer'

export default class Screen1 extends React.Component {
  
  static navigationOption = {
      tabBarLabel: 'Clothes!',
      drawerIcon: ({tintColor}) =>{
            return (
                <Image 
                    style = {{width:26, height:26, margin:5}}
                    source = {require('./assets/list.png')}
                />
            )
      }
  }

  

  render() {
    return (
     
          <View style={containerStyle.container}>
             <StatusBar hidden={true} />
             <Header/>
             <Body/>
             <Footer/>
          </View>
    );
  }
}