import React from 'react';
import { FlatList } from 'react-native';
import BlogItem from './blogItem';

const BlogList = ({ blogsArray, onBlogSelect }) => {
  return (
    <FlatList
      data={blogsArray}
      renderItem={({ item }) => (
        <BlogItem
          id={item.id}
          onPress={onBlogSelect}
          title={item.title}
          author={item.author}
          titleImage={item.titleImage}
          excerpt={item.excerpt}
        />
      )}
      keyExtractor={(item) => `${item.id}`}
    />
  );
};

export default BlogList;
