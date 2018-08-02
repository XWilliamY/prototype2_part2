import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

import { Auth } from 'aws-amplify'
import gql from 'graphql-tag';
 
const query = gql`
  {
    user(id: 5) {
      firstName
      lastName
    }
  }
`


class Screen2 extends Component {
  state = {
    username: ''
  }
  async componentDidMount() {
    Auth.currentUserInfo()
      .then(data => {
        this.setState({
          username: data.username
        })
      })
      .catch(err => console.log('error: ', err))
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Hey {this.state.username}, this is screen222222!</Text>
      </View>
    );
  }
}

export default Screen2;