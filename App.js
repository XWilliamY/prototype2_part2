import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View, 
  Button, TextInput
} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import Screens from './src/screens';

// AWS Amplify setup
import Amplify, {Auth} from 'aws-amplify'; 
import config from './src/aws-exports';
Amplify.configure(config);

Amplify.configure({
  API: {
    graphqlEndpoint: 'https://d4v24ahlc5g73npzgytj6lex54.appsync-api.us-east-1.amazonaws.com/graphql'    
  }
});

/*
setup new AppSync client with 
AWSAppSyncClient constructor from aws-appsync 
configuration in our AppSync.js file
   provides the GraphQL API URL, 
                region, 
                authentication type, 
                and authentication API key.

import AWSAppSyncClient from "aws-appsync";
import { Rehydrated } from 'aws-appsync-react';
import appSyncConfig from './src/AppSync'; // from the AWS AppSync API 

// ApolloClient to handle graphql 
import ApolloClient from 'apollo-boost';
import { ApolloProvider, graphql } from 'react-apollo';  
import gql from 'graphql-tag';

const client = new AWSAppSyncClient({
  url: appSyncConfig.graphqlEndpoint,
  region: appSyncConfig.region,
  auth: {
    type: appSyncConfig.authType,
    apiKey: appSyncConfig.apiKey,
  }
});

const WithProvider = () => (
  <ApolloProvider client={client}>
    <Rehydrated>
      <Screens />
    </Rehydrated>
  </ApolloProvider>
);
*/ 

export default class App extends React.Component {
  render() {
    return <Screens/>;
  }
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    backgroundColor: '#ededed',
    marginVertical: 10
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF'
  }
})