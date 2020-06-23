import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Text, Keyboard } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Button, PasswordInput, BlogList } from '../../../components';
import ROUTES from '../../../constants/routeNames';

class AboutScreen extends Component {
  constructor(props) {
    super(props);
  }

  navigateToBlog = (id) => {
    const { navigation } = this.props;
    navigation.navigate(ROUTES.SCREENS.A);
  };

  render() {
    return null;
  }
}

export default withNavigation(AboutScreen);
