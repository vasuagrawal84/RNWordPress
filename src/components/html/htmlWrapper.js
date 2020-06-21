import React from 'react';
import { StyleSheet, Linking, Dimensions } from 'react-native';
import HTML from 'react-native-render-html';

const styles = StyleSheet.create({
  htmlContainer: { marginHorizontal: 10 },
});

const tagStyles = {
  img: { margin: -10 },
  ul: { marginTop: 30 },
};

const HTMLWrapper = ({ htmlContent }) => {
  const openLink = async (event, href) => {
    const supported = await Linking.canOpenURL(href);
    supported && Linking.openURL(href);
  };

  const removeWordPressTags = (node) => {
    const { children, name } = node;
    return (
      name === 'p' &&
      children &&
      children[0].type === 'comment' &&
      children[0].data === 'more'
    );
  };

  return (
    <HTML
      html={htmlContent}
      imagesMaxWidth={Dimensions.get('window').width}
      ignoreNodesFunction={removeWordPressTags}
      tagsStyles={tagStyles}
      containerStyle={styles.htmlContainer}
      onLinkPress={openLink}
    />
  );
};

export default HTMLWrapper;
