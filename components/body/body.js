import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
import {bodyStyle} from '../../constants/styles'
import data from '../../data/fetchData'
import ItemProduct from './itemFlatList'

var {height, width} = Dimensions.get('screen');

export default class App extends React.Component {
    render() {
      return (
        <View style={bodyStyle.body}>
            <FlatList
              data={data}
              renderItem={({item}) => <ItemProduct item={item} />}
              keyExtractor={(item, index) => item.id + " " + index}
              style={{flex:1, width:width}}
            />
        </View>
    );
  }
}
  