import React, {Component, Fragment} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  AsyncStorage
} from 'react-native'
import { USER_KEY } from './config';

import {Auth} from 'aws-amplify';

export default class SignIn extends Component{
  state = {
    username: '', password: '', 
    user: {}, 
    authenticationCode: '', showConfirmationForm: false
  }
  onChangeText = (key, value) => {
    this.setState({ [key]: value })
  }
  signIn = async () => {
    const {username, password} = this.state
    try {
      const user = await Auth.signIn(username, password)
      console.log('user successfully signed in!', user)
      this.setState({ user, showConfirmationForm: true })
      console.log(user)
    } catch(err){
      console.log('error', err)
      alert(err)
    }
  }

  confirmSignIn = async () => {
    const { user, authenticationCode } = this.state
    try {
       await Auth.confirmSignIn(user, authenticationCode, 'SMS')
       console.log('user successfully signed in!', user)
       this.props.navigation.navigate('Home')
    } catch (err) {
      console.log('error:', err)
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {
          !this.state.showConfirmationForm && (
            <Fragment>
              <TextInput
                style={styles.input}
                placeholder='Username'
                autoCapitalize="none"
                autoCorrect={false}
                placeholderTextColor='white'
                onChangeText={val => this.onChangeText('username', val)}
              />
              <TextInput
                style={styles.input}
                placeholder='Password'
                autoCapitalize="none"
                secureTextEntry={true}
                placeholderTextColor='white'
                onChangeText={val => this.onChangeText('password', val)}
              />
              <Button
                title='Sign In'
                onPress={this.signIn}
              />
            </Fragment>
          )
        }
        {
          this.state.showConfirmationForm && (
            <Fragment>
              <TextInput
                style={styles.input}
                placeholder='Authentication Code'
                autoCapitalize="none"
                placeholderTextColor='white'
                onChangeText={val => this.onChangeText('authenticationCode', val)}
              />
              <Button
                title='Confirm Sign In'
                onPress={this.confirmSignIn}
              />
            </Fragment>
          )
        }        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    fontSize: 18,
    fontWeight: '500',
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    color: 'white',
    padding: 8,
    borderRadius: 14
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
