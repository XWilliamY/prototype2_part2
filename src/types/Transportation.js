import React, {Component} from 'react'

import { Auth } from 'aws-amplify'
import { 
    Container, 
    Header, 
    Content, 
    List, 
    ListItem, 
    Text,
    Button
} from 'native-base';

import {
    ImageBackground,
    ListView,
    Tile,
    Title,
    Subtitle,
    Overlay,
    Screen
  } from '@shoutem/ui';

import ActionList from './ActionList';

export default class Transportation extends Component {
    render() {
        return (
            <Container>
                <Button onPress={()=>this.props.navigation.navigate('DescriptionScreen',
            {
                action: 'Transportation'
            })}>
                <Text>Click Me!</Text>
                </Button>
                <Content>
                <ActionList 
                actionType = 'restaurants' 
                navigation = {this.props.navigation}/>
                </Content>
            </Container>
        );
      }
}