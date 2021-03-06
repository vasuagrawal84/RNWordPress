import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainScreen from '../screen/mainScreen';
import { SafeAreaView } from 'react-native';
import { getBlogs } from '../../../redux/actions/blogs';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView>
        <MainScreen {...this.props} />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  blogs: state.blogs.blogs,
});

const mapDispatchToProps = (dispatch) => ({
  getBlogs: () => dispatch(getBlogs()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
