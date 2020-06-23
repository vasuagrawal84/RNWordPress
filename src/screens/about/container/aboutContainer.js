import React, { Component } from 'react';
import { connect } from 'react-redux';
import AboutScreen from '../screen/aboutScreen';
import { SafeAreaView } from 'react-native';

class AboutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView>
        <AboutScreen />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps)(AboutContainer);
