import {
    createStackNavigator,
    createBottomTabNavigator,
    createSwitchNavigator,
    createMaterialTopTabNavigator
} from 'react-navigation';
import React, {Component} from 'react';

// authentication
import Initializing from './Initializing';
import SignIn from './SignIn';
import SignUp from './SignUp';

// feature-components
import Monitor from './Components/Monitor';
import Profile from './Components/Profile';
import Connect from './Components/Connect';
import DescriptionScreen from './types/DescriptionScreen'

import Completed from './types/Completed';
import Transportation from './types/Transportation';
import Energy from './types/Energy';

import {
    Tab,
    Tabs,
    Header,
    Container, 
    Text
} from 'native-base';


// define each screen as its own stack to grant it a header

const Actions = createMaterialTopTabNavigator(
    {
        Completed:
        {
            screen: Completed
        },
        Energy:
        {
            screen: Energy
        },
        Transportation:
        {
            screen: Transportation
        }

    },
    {
        tabBarComponent: props => {
            return (
                <Tabs tabBarUnderlineStyle={{backgroundColor:'white'}}>
                <Tab 
                 heading="Completed" 
                 activeTabStyle={{backgroundColor: '#4F9A94'}} 
                 activeTextStyle={{color: 'white', fontWeight: 'bold'}}>
                 </Tab>
               <Tab 
                 heading="Energy" 
                 activeTabStyle={{backgroundColor: '#4F9A94'}} 
                 activeTextStyle={{color: 'white', fontWeight: 'bold'}}
                >
                 </Tab>
               <Tab
             heading="Transportation" 
             activeTabStyle={{backgroundColor: '#4F9A94'}} 
             activeTextStyle={{color: 'white', fontWeight: 'bold'}}>
                 </Tab>
               </Tabs>
            );
        }
    }
)

const HomeStack = createStackNavigator(
    {
        Home:
        {
            screen: Actions
        }
    },
    {
        navigationOptions: {
            title:"hello there",
            headerStyle: {
                backgroundColor: '#4F9A94',
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
                backgroundColor: '#4F9A94',
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
                backgroundColor: '#4F9A94',
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
                backgroundColor: '#4F9A94',
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
        initialRouteName: 'Home',
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

