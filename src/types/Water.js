import React, {Component} from 'react'

import { Auth } from 'aws-amplify'
import {Container, Content, Text} from 'native-base';

export default class Water extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            done: false
        }
    }
    componentDidMount() {
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
        <Text>Water</Text>
        </Content>
        </Container>
        );
    }
}