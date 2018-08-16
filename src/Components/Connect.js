import React, {Component} from 'react'

import { Auth } from 'aws-amplify'
import {Container, Content, Text} from 'native-base';
import { BarChart, Grid } from 'react-native-svg-charts';


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
        <Text>Hello, {this.state.username}.</Text>
        {
            this.state.done && <Text>Hi</Text>
        }
        </Content>
        </Container>
        );
    }
}
