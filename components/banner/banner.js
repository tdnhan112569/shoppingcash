import React from 'react';
import {Text, View, Image, Dimensions } from 'react-native';
var {height, width} = Dimensions.get('screen');

export default class Banner extends React.Component {
    render() {
      return (
        <Image 
            style={{width: width, height:50}}
            resizeMode='cover'
            source={{uri:'http://laz-img-cdn.alicdn.com/images/ims-web/TB1DoSku5rpK1RjSZFhXXXSdXXa.jpg_1200x1200.jpg'}}
        />
      );
    }
  }