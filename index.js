/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import Amplify from 'aws-amplify';
import config from './src/aws-exports';
import {name as appName} from './app.json';
Amplify.configure(config);

AppRegistry.registerComponent(appName, () => App);

