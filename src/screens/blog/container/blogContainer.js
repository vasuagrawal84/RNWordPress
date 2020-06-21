import React, { Component } from 'react';
// import { connect } from 'react-redux';
import BlogScreen from '../screen/blogScreen';
import { SafeAreaView } from 'react-native';

class BlogContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView>
        <BlogScreen />
      </SafeAreaView>
    );
  }
}

// const mapStateToProps = state => ({
//   user: state.user.user,
// });

// export default connect(mapStateToProps)(BlogContainer);
export default BlogContainer;
