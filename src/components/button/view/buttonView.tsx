import React from 'react';
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

export interface Props {
  text: string;
  onPress: Function;
}

const ButtonView: React.FC<Props> = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress()} style={styles.touchable}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonView;
