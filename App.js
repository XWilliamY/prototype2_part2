import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View, 
  Button, TextInput} from 'react-native';

import { withAuthenticator } from 'aws-amplify-react-native';

import { StackNavigator } from 'react-navigation';

import Amplify, {Auth} from 'aws-amplify'; 
import config from './src/aws-exports';
Amplify.configure(config);

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class App extends Component {
  state = {
  authCode: ''
  }

  onChangeText(authCode){
    this.setState({authCode})
  }

  signUp(){
    Auth.signUp({
      username: 'xwilliamy2',
      password: 'dreamteam1*S',
      attributes: {
        phone_number: '+16463399551',
        email: 'xwilliamy@gmail.com'
      }
    })
    .then(res => {
      console.log('successful signup: ', res)
    })
    .catch(err => {
      console.log('error signing up: ', err)
    })
  }
  confirmUser() { // 4
    const { authCode } = this.state
    Auth.confirmSignUp('myCoolUsername', authCode)
      .then(res => {
        console.log('successful confirmation: ', res)
      })
      .catch(err => {
        console.log('error confirming user: ', err)
      })
  }

  signIn() { // 1
    Auth.signIn(username, password)
      .then(user => {
      // save user in state somewhere
      })
      .catch(err => {
        console.log('error signing in: ', err)
      })
  }
  confirmSignIn() { // 2
    Auth.confirmSignIn(user, authCode)
      .then(user => {
        console.log('user: ', user)
      }).catch(err => {
        console.log('error confirming sign in: ', err)
      })
  }


/*
  async signUp() {
    const { username, password, email, phone_number } = this.state
    await Auth.signUp({
      username,
      password,
      attributes: { email, phone_number }
    })
    console.log('sign up successful!')
  }
  async confirmSignUp() {
    const { username, authCode } = this.state
    await Auth.configSignignUp(username, authCode)
    console.log('confirm sign up successful!')
  }
  async signIn() {
    const { username, password  } = this.state
    const user = await Auth.signIn(username, password)
    this.setState({ user })
    console.log('sign in successful!')
  }
  async confirmSignIn() {
    const { user, authCode } = this.state
    await Auth.configSignignIn(user, authCode)
    console.log('user now successfully signed in to the app!!')
  }
*/
  render() {
    return (
      <View style={styles.container}>
        <Button title='Sign Up' onPress={this.signUp.bind(this)} />
        <TextInput
          placeholder='Input Code'
          onChangeText={value => this.onChangeText(value)}
          style={styles.input}
        />
        <Button
          title='Confirm User'
          onPress={this.confirmUser.bind(this)}
        />
      </View>
    );
  }
}

export default withAuthenticator(App);

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