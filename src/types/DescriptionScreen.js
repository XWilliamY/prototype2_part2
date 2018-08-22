import React, {Component} from 'react'
import {
    List,
    ListItem,
    Text,
    Content
} from 'native-base';

export default class DescriptionScreen extends Component{
    render(){
        return(
            <Content>
            <Text>Coming from {this.props.navigation.state.params.action}</Text>
            <Text>With name {this.props.navigation.state.params.name}</Text>
            </Content>
        )
    }
}