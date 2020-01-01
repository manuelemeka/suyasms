/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
Platform,
StyleSheet,
Text,
View
} from 'react-native';


export default class App extends Component {

  render() {
    return (
   <view style={styles.container}>>
     <view style={styles.banner}>></view>
     <view style={styles.menu}>></view>
   </view>
    )
    }
    
    
}

const styles = StyleSheet.create({
  container: {
  // eslint-disable-next-line prettier/prettier
  marginTop: 75,
  alignItems: 'center',
  flex: 1
  },
  banner: {
  width: 50,
  height: 50,
  borderWidth: 2,
  margin: 15,
  alignItems: 'center',
  justifyContent: 'center'
  },
  menu:{},
  });