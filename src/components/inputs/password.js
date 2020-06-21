import React from 'react';
import {
  View,
  TextInput,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    top: 3,
    right: 3,
    paddingRight: 0,
  },
  iconText: {
    padding: 12,
    color: 'grey',
  },
});

class PasswordInput extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isMasked: true,
    };
  }

  setRef = (input) => {
    this.input = input;
  };

  togglePasswordMask = () => {
    this.setState((prevState) => ({ isMasked: !prevState.isMasked }));
    if (this.input) {
      this.input.blur();
    }
  };

  focus = () => this.input.focus();

  render() {
    return (
      <View>
        <TextInput
          {...this.props}
          underlineColorAndroid="transparent"
          placeholder="Password"
          placeholderTextColor={'grey'}
          returnKeyType="go"
          enablesReturnKeyAutomatically
          secureTextEntry={this.state.isMasked}
          textContentType="password"
          ref={this.setRef}
          contextMenuHidden
        />
        <View style={[styles.iconContainer]}>
          <TouchableWithoutFeedback onPress={this.togglePasswordMask}>
            <Text style={styles.iconText}>
              {this.state.isMasked ? 'View' : 'Hide'}
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

export default PasswordInput;
