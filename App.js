import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View, 
  Button, TextInput} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import { withAuthenticator } from 'aws-amplify-react-native';

import Screens from './src/screens';

import Amplify, {Auth} from 'aws-amplify'; 
import config from './src/aws-exports';
Amplify.configure(config);

export default class App extends React.Component {
  render() {
    return <Screens />;
  }
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    backgroundColor: '#ededed',
    marginVertical: 10
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF'
  }
})