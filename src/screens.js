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
import Water from './types/Water';

import Icon from 'react-native-vector-icons/Ionicons';

// define each screen as its own stack to grant it a header

const Actions = createMaterialTopTabNavigator(
    {
        Completed: { screen: Completed },
        Energy: { screen: Energy },
        Transportation: { screen: Transportation },
        Water: { screen: Water }
    },
    {
        tabBarPosition: 'top',
        tabBarOptions: {
            scrollEnabled: true,
            indicatorStyle: {
                borderBottomWidth: 3,
                borderBottomColor: 'white'
            },
            activeTintColor: 'white',
            inactiveTintColor: '#F2F2F2',
            style: {
                backgroundColor: '#4F9A94'
            }
        }
    }
)

const HomeStack = createStackNavigator(
    {
        Home:
        {
            screen: Actions
        },
        DescriptionScreen:
        {
            screen: DescriptionScreen
        }
    },
    {
        navigationOptions: {
            title:"Sustainable Actions",
            headerStyle: {
                backgroundColor: '#4F9A94',
            },
            headerTitleStyle: {
                color: 'white'
            },
            headerTruncatedBackTitle: 'Actions',
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
        tabBarOptions: {
            activeTintColor: '#4F9A94',
            inactiveTintColor: 'grey',
            style: {
                backgroundColor: 'white'
            }
        },
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
              const { routeName } = navigation.state;
              let iconName;
              if (routeName === 'Home') {
                iconName = `ios-home`;
              } else if (routeName === 'Monitor') {
                iconName = `ios-home`;
              } else if (routeName === 'Connect') {
                iconName = `ios-home`;
              } else{
                  iconName = `ios-home`;
              }
              // You can return any component that you like here! We usually use an
              // icon component from react-native-vector-icons
              return <Icon name={iconName} size={25} color={tintColor} />;
            },
          }),
        }
    );

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

