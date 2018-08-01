import React, {Component} from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  AsyncStorage
} from 'react-native'

import { USER_KEY } from './config'
import { Auth } from 'aws-amplify'


export default class Home extends Component {
  static navigationOptions = {
    title: 'Energize ',
    headerStyle: {
      backgroundColor: '#16a085',
    },
    headerTitleStyle: {
      color: 'white'
    },
    headerTruncatedBackTitle: 'Home',
  }

  state = {
    username: '',
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

  logout = async () => {
    try {
      await Auth.signOut()
      this.props.navigation.navigate('Auth')
    } catch (err) {
      console.log('error signing out...: ', err)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello, {this.state.username}.</Text>
        <Button
          onPress={this.logout}
          title="Sign Out"
        />
        <Button
          onPress={() => this.props.navigation.navigate('Screen2')}
          title="View next screen"
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})