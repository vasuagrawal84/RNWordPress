import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Text, Keyboard } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Button, PasswordInput, BlogList } from '../../../components';
import ROUTES from '../../../constants/routeNames';
import HTMLWrapper from '../../../components/html/htmlWrapper';

class PrivacyScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <HTMLWrapper htmlContent={this.props.html} />
      </View>
    );
  }
}

export default withNavigation(PrivacyScreen);
