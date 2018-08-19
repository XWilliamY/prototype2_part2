import React, {Component} from 'react'

import { Auth } from 'aws-amplify'
import {Container, Content, Text} from 'native-base';
import {TouchableOpacity, View} from 'react-native';

import ActionList from './ActionList';
import { Button } from '../../node_modules/@shoutem/ui';

export default class Energy extends Component {
    render() {
        return (
          <Button
          title="Press Me"
          onPress= {() => this.props.navigation.navigate('DescriptionScreen')}/>
        );
      }
}