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


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <Screens />;
  }
}


// export default withAuthenticator(App);

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