import React, { Component } from 'react';
// import { connect } from 'react-redux';
import HomeScreen from '../screen/homeScreen';
import { SafeAreaView } from 'react-native';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <HomeScreen />
      </SafeAreaView>
    );
  }
}

// const mapStateToProps = state => ({
//   user: state.user.user,
// });

// export default connect(mapStateToProps)(HomeContainer);
export default HomeContainer;
