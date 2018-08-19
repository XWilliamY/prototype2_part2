import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ListView
} from 'react-native';
import { 
  Container,
  Tab,
  Tabs,
  ScrollableTab
} from 'native-base';

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


import Completed from '../types/Completed'
import Energy from '../types/Energy'
import Transportation from '../types/Transportation'
import Water from '../types/Water';

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
        <Tabs 
                renderTabBar={()=> <ScrollableTab />}
                tabBarUnderlineStyle={{backgroundColor:'white'}}>
                    <Tab 
                    heading="Completed" 
                    activeTabStyle={{backgroundColor: '#4F9A94'}} 
                    activeTextStyle={{color: 'white', fontWeight: 'bold'}}>
                    <Completed/>
                    </Tab>
                    <Tab 
                    heading="Energy" 
                    activeTabStyle={{backgroundColor: '#4F9A94'}} 
                    activeTextStyle={{color: 'white', fontWeight: 'bold'}}>
                    <Energy/>
                    </Tab>
                    <Tab
                    heading="Transportation" 
                    activeTabStyle={{backgroundColor: '#4F9A94'}} 
                    activeTextStyle={{color: 'white', fontWeight: 'bold'}}>
                    <Transportation/>
                    </Tab>
                    <Tab 
                    heading="Water"
                    activeTabStyle={{backgroundColor: '#4F9A94'}} 
                    activeTextStyle={{color: 'white', fontWeight: 'bold'}}>
                    <Water/>
                    </Tab>
               </Tabs>
          </Container>
    );
  }
}

export default Monitor;

