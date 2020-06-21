import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Text, Keyboard } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Button, PasswordInput } from '../../../components';
import ROUTES from '../../../constants/routeNames';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignSelf: 'center',
    flex: 1,
  },
  textInput: {
    backgroundColor: 'white',
    color: 'black',
    opacity: 0.8,
    borderRadius: 2,
    paddingLeft: 5,
    height: 50,
    width: 300,
    marginBottom: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingVertical: 40,
  },
});

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { username: null, password: null };
  }

  signIn = () => {
    Keyboard.dismiss();

    const { navigation } = this.props;
    navigation.navigate(ROUTES.SCREENS.MAIN);
    // TODO: call sign in redux action
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>10Up Engineering Test!</Text>
        <TextInput
          style={styles.textInput}
          underlineColorAndroid="transparent"
          placeholder="Email"
          placeholderTextColor={'grey'}
          value={this.state.username}
          autoCapitalize="none"
          onChangeText={(username) => this.setState({ username })}
          textContentType="username"
          keyboardType="default"
          returnKeyType="next"
          enablesReturnKeyAutomatically
          onSubmitEditing={() => {
            this.passwordInput.focus();
          }}
          blurOnSubmit={false}
        />
        <PasswordInput
          style={styles.textInput}
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          ref={(input) => {
            this.passwordInput = input;
          }}
          onSubmitEditing={this.signIn}
        />
        <Button onPress={this.signIn} text="Login" />
      </View>
    );
  }
}

export default withNavigation(HomeScreen);
