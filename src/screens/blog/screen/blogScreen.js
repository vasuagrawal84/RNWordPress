import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import HTMLWrapper from '../../../components/html/htmlWrapper';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingVertical: 40,
    textAlign: 'center',
  },
  htmlContainer: { marginHorizontal: 10 },
});

const BlogScreen = ({ route, navigation }) => {
  const title = navigation.getParam('title');
  const htmlContent = navigation.getParam('htmlContent');

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{title.rendered}</Text>
      <HTMLWrapper htmlContent={htmlContent.rendered} />
    </ScrollView>
  );
};

export default withNavigation(BlogScreen);
