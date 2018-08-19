import React, {Component} from 'react'

import { Auth } from 'aws-amplify'
import {Container, Content, Text, Button} from 'native-base';

import {
    ImageBackground,
    StyleSheet,
    View,
    Image,
    FlatList
} from 'react-native';

var FlatListData = [
    {
        "key": 1,
        "name": 'Line Dry',
        "image": '/hangdry.jpeg'
    },
    {
        "key": 2,
        "name": 'Line Dry',
        "image": '/hangdry.jpeg'
    },
    {
        "key": 3,
        "name": 'Line Dry',
        "image": '/hangdry.jpeg'
    },
]

class FlatListRow extends Component{
    render(){
        return(
        <View style = {
            { 
                flex: 1,
                backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen' : 'tomato'
            }
        }>
        <Text>{this.props.item.name}</Text>
        <Text>{this.props.item.key}</Text>
        </View>
        )
    }
}

export default class Completed extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            done: false
        }
    }
    componentDidMount() {
        Auth.currentUserInfo()
          .then(data => {
            this.setState({
              username: data.username,
              done:true
            })
          })
          .catch(err => console.log('error: ', err))
        }
    render() {
        return (
            <Container>
            <Content>
                <Text>hi</Text>
                <Button onPress={()=>this.props.navigation.navigate('DescriptionScreen')}>
            <Text>Click Me!</Text>
          </Button>
                <Text>Hi</Text>
                {/*}
                <FlatList
                data = {FlatListData}
                renderItem = {({item, index}) =>{
                    return (
                    <FlatListRow
                    item = {item}
                    index = {index}>

                    </FlatListRow>);
                } }
                >

            </FlatList>*/}
            <Text>what is happpening </Text>
            </Content>
            </Container>
        );
    }
}


const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        alignSelf: 'stretch',
        width: undefined,
        height: undefined
    }
});