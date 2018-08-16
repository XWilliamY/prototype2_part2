import React, {Component, Fragment} from 'react';
import {
  View,
  Button,
  TextInput,
  StyleSheet
} from 'react-native';
import { Auth } from 'aws-amplify';

const MFATypes = {
  SMS: true, // if SMS enabled in your user pool
  TOTP: false, // if TOTP enabled in your user pool
  Optional: true, // if MFA is set to optional in your user pool
}


const initialState = {
  username: '', password: '', 
  email: '', phone_number: '', 
  authenticationCode: '', showConfirmationForm: false
}

export default class SignUp extends Component{
  state = initialState

  // finds the dictionary key with name = key 
  onChangeText = (key, val) => {
    this.setState({[key] : val})
  }

  signUp = async () => {
    const { username, password, email, phone_number } = this.state
    try {
      const success = await Auth.signUp({ 
        username, password, 
        attributes: { email, phone_number }})
      console.log('user successfully signed up!: ', success)
      this.setState({ showConfirmationForm: true })
    } catch (err) {
      console.log('error signing up: ', err)
      alert(err)
    }
  }

  confirmSignUp = async () => {
    const {username, authenticationCode } = this.state
    try {
      await Auth.confirmSignUp(username, authenticationCode)
      console.log('successully signed up!')
      alert('User signed up successfully!')
      // erase information after our user signs up 
      this.setState({ ...initialState })
    } catch (err) {
      console.log('error confirming signing up: ', err)
      alert(err)
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
            placeholderTextColor='white'
            onChangeText={val => this.onChangeText('username', val)}
          />
          <TextInput
            style={styles.input}
            placeholder='Password'
            secureTextEntry={true}
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={val => this.onChangeText('password', val)}
          />
          <TextInput
            style={styles.input}
            placeholder='Email'
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={val => this.onChangeText('email', val)}
          />
          <TextInput
            style={styles.input}
            placeholder='Phone Number'
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={val => this.onChangeText('phone_number', val)}
          />
          <Button
            title='Sign Up'
            onPress={this.signUp}
          />
        </Fragment>
        )
      }
      {
        this.state.showConfirmationForm && (
            <Fragment>
              <TextInput
                style={styles.input}
                placeholder='Authentication code'
                autoCapitalize="none"
                placeholderTextColor='white'
                onChangeText={val => this.onChangeText('authenticationCode', val)}
              />
              <Button
                title='Cancel'
                onPress = { () => this.setState({...initialState})}/>
              <Button
                title='Confirm Sign Up'
                onPress={this.confirmSignUp}
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
    height: 55,
    backgroundColor: '#4F9B94',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})