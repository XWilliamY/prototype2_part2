import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  AsyncStorage
} from 'react-native'

import { USER_KEY } from './config'

export default class Home extends React.Component {
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
  
  logout = async () => {
    try {
      await AsyncStorage.removeItem(USER_KEY)
      goToAuth()
    } catch (err) {
      console.log('error signing out...: ', err)
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello from Home screen.</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Auth')}
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