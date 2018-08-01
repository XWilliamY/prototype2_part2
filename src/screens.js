import {createStackNavigator} from 'react-navigation';
import React, {Component} from 'react';
import {View,Text} from 'react-native';

import Home from './Home';
import Initializing from './Initializing';
import navigation from './navigation';
import Screen2 from './Screen2';
import SignIn from './SignIn';
import SignUp from './SignUp';

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

  export default class Screens extends Component{
      render (){
          return <RootStack/>;
      }
  }


/*
const screens = createStackNavigator({
    Home: {
        screen: Home
    },});
    Initializing: {
        screen: Initializing
    },
    navigation : {
        screen: navigation
    },
    Screen2: {
        screen: Screen2
    },
    SignIn: {
        screen: SignIn
    },
    SignUp:
    {
        screen: SignUp
    },
}, {
    initialRouteName: 'Initializing'
});
*/

