import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ListView
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Button,
List, ListItem } from 'native-base';

import { Auth } from 'aws-amplify'

const datas = [
  'Simon Mignolet',
  'Nathaniel Clyne',
  'Dejan Lovren',
  'Mama Sakho',
  'Alberto Moreno',
  'Emre Can',
  'Joe Allen',
  'Phil Coutinho',
];


class Monitor extends Component {
  constructor(props){
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: datas,
    };
  }
  state = {
    username: ''
  }
  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
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
  render() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
      <Container>
            <Content>
            <Text>Hey {this.state.username}, this is screen222222!</Text>
              <Card>
                <CardItem>
                  <Icon active name="logo-googleplus" />
                  <Text>Google Plus</Text>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                 </CardItem>
               </Card>
               <List
            leftOpenValue={75}
            rightOpenValue={-75}
            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
            renderRow={data =>
              <ListItem>
                <Text> {data} </Text>
              </ListItem>}
            renderLeftHiddenRow={data =>
              <Button full onPress={() => alert(data)}>
                <Icon active name="information-circle" />
              </Button>}
            renderRightHiddenRow={(data, secId, rowId, rowMap) =>
              <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                <Icon active name="trash" />
              </Button>}
          />
            </Content>
          </Container>
    );
  }
}

export default Monitor;

