import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  touchable: {
    padding: 10,
    backgroundColor: 'tomato',
    height: 40,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
});

class ButtonView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { text, onPress } = this.props;

    return (
      <TouchableOpacity onPress={() => onPress()} style={styles.touchable}>
        <Text>{text}</Text>
      </TouchableOpacity>
    );
  }
}

export default ButtonView;
