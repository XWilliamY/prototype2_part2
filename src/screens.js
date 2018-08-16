import {
    createStackNavigator,
    createBottomTabNavigator,
    createSwitchNavigator,
} from 'react-navigation';
import React, {Component} from 'react';

// authentication
import Initializing from './Initializing';
import SignIn from './SignIn';
import SignUp from './SignUp';

// feature-components
import Home from'./Components/Home';
import Monitor from './Components/Monitor';
import Profile from './Components/Profile';
import Connect from './Components/Connect';

// define each screen as its own stack to grant it a header
const HomeStack = createStackNavigator(
    {
        Home:
        {
            screen: Home
        }
    },
    {
        navigationOptions: {
            title:"hi",
            headerStyle: {
                backgroundColor: '#20635E',
            },
            headerTitleStyle: {
                color: 'white'
            },
            headerTruncatedBackTitle: 'Home',
        }
    }
)

const MonitorStack = createStackNavigator(
    {
        Monitor:
        {
            screen: Monitor
        }
    },
    {
        navigationOptions: {
            title:"hi",
            headerStyle: {
                backgroundColor: '#20635E',
            },
            headerTitleStyle: {
                color: 'white'
            },
            headerTruncatedBackTitle: 'Home',
        }
    }
)

const ProfileStack = createStackNavigator(
    {
        Profile:
        {
            screen: Profile
        }
    },
    {
        navigationOptions: {
            title:"hi",
            headerStyle: {
                backgroundColor: '#20635E',
            },
            headerTitleStyle: {
                color: 'white'
            },
            headerTruncatedBackTitle: 'Home',
        }
    }
)

const ConnectStack = createStackNavigator(
    {
        Connect:
        {
            screen: Connect
        }
    },
    {
        navigationOptions: {
            title:"hi",
            headerStyle: {
                backgroundColor: '#20635E',
            },
            headerTitleStyle: {
                color: 'white'
            },
            headerTruncatedBackTitle: 'Home',
        }
    }
)

// wrap them in a tab navigator
const HomeTabs = createBottomTabNavigator(
    {
        Home:
        {
            screen: HomeStack,
        },
        Monitor:
        {
            screen: MonitorStack
        },
        Connect:
        {
            screen:ConnectStack
        },
        Profile:
        {
            screen:ProfileStack
        },
    },
    {
        initialRouteName: 'Monitor',
    }
)

const AuthTab = createBottomTabNavigator(
    {
        SignIn: { screen: SignIn },
        SignUp: { screen: SignUp }},
    {
        initialRouteName: 'SignIn'
    }
)

const RootStack = createSwitchNavigator(
    {
        Initializing: { screen: Initializing },
        Home: { screen: HomeTabs },
        Auth: { screen: AuthTab }
    }, 
    { initialRouteName: 'Initializing' }
);

export default class Screens extends Component{
    render (){
        return <RootStack/>;
    }
}


