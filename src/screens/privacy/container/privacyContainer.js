import React, { Component } from 'react';
import { connect } from 'react-redux';
import PrivacyScreen from '../screen/privacyScreen';
import { SafeAreaView } from 'react-native';

class PrivacyContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView>
        <PrivacyScreen {...this.props} />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.user,
});

const mapDispatchToProps = (dispatch) => ({
  downloadPrivacyPolicy: () => dispatch(getPrivacyPolicy()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivacyContainer);
