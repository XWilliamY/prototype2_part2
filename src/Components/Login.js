import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ActivityIndicator,
  Modal,
  Dimensions,
} from 'react-native';
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Button,
} from 'react-native-elements';
import { StackNavigator } from 'react-navigation';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    bla: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    activityIndicator: {
      backgroundColor: colors.mask,
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    formContainer: {
      height: 250,
      justifyContent: 'space-around',
      paddingHorizontal: 5,
    },
    input: {
      fontFamily: 'lato',
    },
    validationText: {
      fontFamily: 'lato',
    },
    puppy: {
      width: width / 2,
      height: width / 2,
    },
    imageContainer: {
      alignItems: 'center',
    },
    passwordResetButton: {
      color: colors.primary,
      marginTop: 10,
      textAlign: 'center',
    },
  });