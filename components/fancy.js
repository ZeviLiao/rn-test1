/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { StyleSheet, Text, View , Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')
export default class Fancy extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Hello</Text>
        </View>
        <Text>Fancy</Text>
      </View>
    );
  }
}

const size = '30%';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'red',
    // padding: 100
    marginTop: 100
  },
  box: {
    backgroundColor: 'yellow',
    width: width/2,
    height: height/2,
    position: 'absolute',
    top: 20,
    left: 30,
    borderRadius: 50
  },
  text: {
    color: 'blue',
    fontSize: 34
  }
});
