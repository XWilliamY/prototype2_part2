import React, {Component} from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  StatusBar
} from 'react-native'

import { 
  Container, 
  Header, 
  Content, 
  Form, 
  Item, 
  Input, 
  Label 
} from 'native-base';

import { API, Auth } from 'aws-amplify'

export default class Home extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    console.log(navigationOptions);
    // Notice the logs ^
    // sometimes we call with the default navigationOptions and other times
    // we call this with the previous navigationOptions that were returned from
    // this very function
    return {
      title: 'Welcome'
    };
  };
  constructor(props){
    super(props);
    this.state = {
      username: '',
      temp: 0,
      kwh: 0
    }
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

  submitForm = () => {
    this.setState({
      kwh: parseInt(this.state.kwh) + parseInt(this.state.temp)
    })

  }

  render() {
    return (
      <Container style={styles.container}>
        <Content>
        <Text>Hello, {this.state.username}.</Text>
        <Button
          onPress={this.logout}
          title="Sign Out"
        />
        <Button
          onPress={() => this.props.navigation.navigate('MonitorStack')}
          title="Monitor Energy"
        />
        <Item>
            <Input 
            placeholder="Purchase energy here"
            keyboardType='number-pad'
            onChangeText = {(text) => this.setState({
              temp: text
            })}
             />
          </Item>
        <Button
        title = "Submit"
        onPress={this.submitForm}/>
        <Text>You have requested {this.state.kwh}, submitting.</Text>
        </Content>
      </Container>
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