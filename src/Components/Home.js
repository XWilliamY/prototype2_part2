import React, {Component} from 'react'
import {
  Text,
  StyleSheet,
} from 'react-native'

import { 
  Container, 
  Content, 
  Tab,
  Tabs,
  Button
} from 'native-base';

import Completed from '../types/Completed'
import Energy from '../types/Energy'
import Transportation from '../types/Transportation'

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
      <Container style={styles.container}>{/*
       <Tabs tabBarUnderlineStyle={{backgroundColor:'white'}}>
       <Tab 
        heading="Completed" 
        activeTabStyle={{backgroundColor: '#4F9A94'}} 
        activeTextStyle={{color: 'white', fontWeight: 'bold'}}>
        <Completed />
        </Tab>
      <Tab 
        heading="Energy" 
        activeTabStyle={{backgroundColor: '#4F9A94'}} 
        activeTextStyle={{color: 'white', fontWeight: 'bold'}}>
        <Energy />
        </Tab>
      <Tab

    heading="Transportation" 
    activeTabStyle={{backgroundColor: '#4F9A94'}} 
    activeTextStyle={{color: 'white', fontWeight: 'bold'}}>
        <Transportation />
        </Tab>
      </Tabs>*/}
        <Content>
        <Button onPress={()=>this.props.navigation.navigate('DescriptionScreen')}>
            <Text>Click Me!</Text>
          </Button>
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