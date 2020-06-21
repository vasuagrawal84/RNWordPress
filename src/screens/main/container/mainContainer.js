import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainScreen from '../screen/mainScreen';
import { SafeAreaView } from 'react-native';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView>
        <MainScreen />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps)(MainContainer);
