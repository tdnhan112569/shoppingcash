import React from 'react';
import {Text, View, Image } from 'react-native';
import {headerStyle} from '../../constants/styles'
import Banner from '../banner/banner'
export default class Header extends React.Component {
    render() {
      return (
        <View style={headerStyle.containerHeader}>
          <Banner />
            
        </View>
      );
    }
  }
  
// {/* menu field*/}
// <View style={headerStyle.menuField}>
// <Image 
//     style={headerStyle.menuButton}
//     source={require('../../assets/list.png')}
//     resizeMode='contain'
//   />
// </View>

// {/* content field */}
// <View style={headerStyle.contentField}>
// <View style={headerStyle.contentInput}>

// </View>
// </View>

// {/* search */}
// <View style={headerStyle.searchField}>
// <Image 
//   style={headerStyle.searchButton}
//   source={require('../../assets/search.png')}
//   resizeMode='contain'
// />
// </View>