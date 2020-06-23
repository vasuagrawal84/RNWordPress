import React, { Component } from 'react';
import { connect } from 'react-redux';
import SettingsScreen from '../screen/settingsScreen';
import { SafeAreaView } from 'react-native';
import { signOut } from '../../../redux/actions/user';
import { getPages } from '../../../redux/actions/pages';

class SettingsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <SettingsScreen {...this.props} />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.username,
  pages: state.pages.pages,
});

const mapDispatchToProps = (dispatch) => ({
  getPages: () => dispatch(getPages()),
  logout: (onSuccess) => dispatch(signOut(onSuccess)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);
