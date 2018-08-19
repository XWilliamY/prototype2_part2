import React, {Component} from 'react'

import { Auth } from 'aws-amplify'
import { Container, Header, Content, List, ListItem, Text } from 'native-base';

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
                <Content>
                <ActionList actionType = 'restaurants'/>
                </Content>
            </Container>
        );
      }
}