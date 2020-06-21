import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableHighlight,
  StyleSheet,
  Dimensions,
} from 'react-native';
import HTMLWrapper from '../../components/html/htmlWrapper';

const itemWidth = Dimensions.get('window').width * 0.9;

const styles = StyleSheet.create({
  container: {
    marginVertical: 50,
  },
  information: {
    padding: 10,
  },
  image: {
    width: itemWidth,
    height: (itemWidth / 16) * 9,
    alignSelf: 'center',
  },
  author: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
});

const BlogItem = ({ id, title, author, titleImage, excerpt, onPress }) => {
  return (
    <TouchableHighlight onPress={() => onPress(id)}>
      <View style={styles.container}>
        <Image source={{ uri: titleImage }} style={styles.image} />
        <View style={styles.information}>
          <HTMLWrapper htmlContent={title.rendered} />
          <Text style={styles.author}>{`Author: ${author}`}</Text>
          <HTMLWrapper htmlContent={excerpt.rendered} />
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default BlogItem;
