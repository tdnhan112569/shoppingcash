import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {footerStyle} from '../../constants/styles'

export default class App extends React.Component {
    render() {
      return (
        <View style={footerStyle.footer}>
            <Text style={footerStyle.content}>@CopyRight from Thầy Hùng</Text>
        </View>
      );
    }
  }
  