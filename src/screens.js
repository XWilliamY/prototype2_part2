import {
    createStackNavigator,
    createBottomTabNavigator,
    createSwitchNavigator
} from 'react-navigation';
import React, {Component} from 'react';
import {View,Text} from 'react-native';

import Home from './Home';
import Initializing from './Initializing';
import Screen2 from './Screen2';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Stack = createStackNavigator(
    {
        Home: { screen: Home },
        Screen2 : { screen: Screen2 }},
    {
        initialRouteName: 'Home'
    }
)

const Tabs = createBottomTabNavigator(
    {
        SignIn: { screen: SignIn },
        SignUp: { screen: SignUp }},
    {
        initialRouteName: 'SignUp'
    }
)

const RootStack = createSwitchNavigator(
    {
        Initializing: { screen: Initializing },
        Home: { screen: Stack },
        Auth: {screen: Tabs}

    }, 
    { initialRouteName: 'Initializing' }
);

export default class Screens extends Component{
    render (){
        return <RootStack/>;
    }
}

