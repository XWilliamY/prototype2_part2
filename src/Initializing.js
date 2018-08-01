import React, {Component} from 'react';
import { 
  View, 
  Text,
  StyleSheet,
  AsyncStorage 
} from 'react-native';

import {USER_KEY} from './config';
import {Auth} from 'aws-amplify';

/*
We check AsyncStorage to see if we have a user saved in storage, 
if so we load the Home screen, 
if not we load the Auth routes (SignIn & SignUp).
*/
export default class Initializing extends Component {
  async componentDidMount(){
    try{
      const user = await Auth.currentAuthenticatedUser()
      console.log('user: ', user)
      if (user){
        this.props.navigation.navigate('Home');
      } else{
        this.props.navigation.navigate('Auth');
      }
     } catch (err){
        console.log('error: ', err)
        this.props.navigation.navigate('Auth');
      }
    }
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Loading</Text>
        </View>
      )
    }
  }
  
  const styles = StyleSheet.create({
    welcome: {
      fontSize: 28
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })