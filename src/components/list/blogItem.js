import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import HTMLWrapper from '../../components/html/htmlWrapper';

const itemWidth = Dimensions.get('window').width * 0.9;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'grey',
    margin: 20,
  },
  information: {
    padding: 10,
  },
  image: {
    width: itemWidth,
    height: (itemWidth / 16) * 9,
    alignSelf: 'center',
    borderRadius: 10,
  },
  author: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  excerpt: {
    height: 83,
    overflow: 'hidden',
  },
});

const BlogItem = ({ id, title, author, titleImage, excerpt, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(id)}>
      <View style={styles.container}>
        <Image
          source={{ uri: titleImage || 'https://picsum.photos/320/180' }}
          style={styles.image}
        />
        <View style={styles.information}>
          <HTMLWrapper htmlContent={title.rendered} />
          <Text style={styles.author}>{`Author: ${author}`}</Text>
          <View style={styles.excerpt}>
            <HTMLWrapper htmlContent={excerpt.rendered} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BlogItem;
