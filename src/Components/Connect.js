import React, {Component} from 'react'

import { Auth } from 'aws-amplify'
import {Container, Content, Text} from 'native-base';
import { BarChart, Grid, StackedBarChart } from 'react-native-svg-charts'

const colors = [ '#33691E', '#689F38', '#9CCC65', '#DCEDC8' ]
const data = [
    {
        broccoli: {
            value: 3840,
            svg: {
                onPress: () => console.log('onPress => 0:broccoli:3840'),
            },
        },
        celery: {
            value: 1920,
            svg: {
                onPress: () => console.log('onPress => 0:celery:1920'),
            },
        },
        onions: {
            value: 960,
            svg: {
                onPress: () => console.log('onPress => 0:onions:960'),
            },
        },
        tomato: {
            value: 400,
            svg: {
                onPress: () => console.log('onPress => 0:tomato:400'),
            },
        },
    },
    {
        broccoli: {
            value: 1600,
            svg: {
                onPress: () => console.log('onPress => 1:broccoli:1600'),
            },
        },
        celery: {
            value: 1440,
            svg: {
                onPress: () => console.log('onPress => 1:celery:1440'),
            },
        },
        onions: {
            value: 960,
            svg: {
                onPress: () => console.log('onPress => 1:onions:960'),
            },
        },
        tomato: {
            value: 400,
            svg: {
                onPress: () => console.log('onPress => 1:tomato:400'),
            },
        },
    },
    {
        broccoli: {
            value: 640,
            svg: {
                onPress: () => console.log('onPress => 2:broccoli:640'),
            },
        },
        celery: {
            value: 960,
            svg: {
                onPress: () => console.log('onPress => 2:celery:960'),
            },
        },
        onions: {
            value: 3640,
            svg: {
                onPress: () => console.log('onPress => 2:onions:3640'),
            },
        },
        tomato: {
            value: 400,
            svg: {
                onPress: () => console.log('onPress => 2:tomato:400'),
            },
        },
    },
    {
        broccoli: {
            value: 3320,
            svg: {
                onPress: () => console.log('onPress => 3:broccoli:3320'),
            },
        },
        celery: {
            value: 480,
            svg: {
                onPress: () => console.log('onPress => 3:celery:480'),
            },
        },
        onions: {
            value: 640,
            svg: {
                onPress: () => console.log('onPress => 3:onions:640'),
            },
        },
        tomato: {
            value: 400,
            svg: {
                onPress: () => console.log('onPress => 3:tomato:400'),
            },
        },
    },
]

const keys = [ 'broccoli', 'celery', 'onions', 'tomato' ]

class StackedBarChartWithOnPressExample extends React.PureComponent {

    render() {
        return (
            <StackedBarChart
                style={{ height: 300 }}
                colors={ colors }
                contentInset={{ top: 30, bottom: 30 }}
                data={ data }
                keys={ keys }
                horizontal = {true}
                valueAccessor={ ({ item, key }) => item[ key ].value }
            >
                <Grid />
            </StackedBarChart>
        )
    }
}

class BarChartExample extends React.PureComponent {

    render() {

        const fill = 'rgb(134, 65, 244)'
        const data   = [ 50, 10, 40, 95, -4, -24, null, 85, undefined, 0, 35, 53, -53, 24, 50, -20, -80 ]

        return (
            <BarChart
                style={{ height: 200 }}
                data={ data }
                svg={{ fill }}
                contentInset={{ top: 30, bottom: 30 }}
            >
                <Grid/>
            </BarChart>
        )
    }

}

export default class Connect extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            done: false
        }
    }
    async componentDidMount() {
        Auth.currentUserInfo()
          .then(data => {
            this.setState({
              username: data.username,
              done:true
            })
          })
          .catch(err => console.log('error: ', err))
        }
    render() {
        return (
        <Container>
        <Content>
            <BarChartExample/>
            <StackedBarChartWithOnPressExample/>
        <Text>Hello there, {this.state.username}.</Text>
        {
            this.state.done && <Text>Hi</Text>
        }
        </Content>
        </Container>
        );
    }
}
