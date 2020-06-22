import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeScreen from '../screen/homeScreen';
import { SafeAreaView } from 'react-native';
import { attemptLogin, verifyLogin } from '../../../redux/actions/user';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <HomeScreen {...this.props} />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.username,
  loading: state.user.loading,
  error: state.user.error,
});

const mapDispatchToProps = (dispatch) => ({
  attemptLogin: (username, password, onSuccess) =>
    dispatch(attemptLogin(username, password, onSuccess)),
  isLoggedIn: (onSuccess) => {
    dispatch(verifyLogin(onSuccess));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
