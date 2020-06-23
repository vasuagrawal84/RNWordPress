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
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  textInput: {
    backgroundColor: 'white',
    color: 'black',
    opacity: 0.8,
    borderRadius: 5,
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
  loading: {
    fontSize: 15,
    alignSelf: 'center',
  },
});

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { username: null, password: null };
  }

  async componentDidMount() {
    await this.props.isLoggedIn(this.onSuccessfulLogin);
  }

  onSuccessfulLogin = () => {
    const { navigation } = this.props;
    navigation.navigate(ROUTES.SCREENS.MAIN);
  };

  signIn = async () => {
    Keyboard.dismiss();

    const { attemptLogin } = this.props;

    await attemptLogin(
      this.state.username,
      this.state.password,
      this.onSuccessfulLogin,
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>10Up Engineering Test!</Text>
        {this.props.loading ? (
          <Text style={styles.loading}>Loading...</Text>
        ) : (
          <View>
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
        )}
      </View>
    );
  }
}

export default withNavigation(HomeScreen);
