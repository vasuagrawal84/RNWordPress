import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { Button, PasswordInput, BlogList } from '../../../components';
import ROUTES from '../../../constants/routeNames';
import HTMLWrapper from '../../../components/html/htmlWrapper';

const styles = StyleSheet.create({
  loading: {
    fontSize: 20,
    alignSelf: 'center',
  },
  settingOption: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  userGreeting: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    margin: 20,
  },
});

class SettingsScreen extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    await this.props.getPages();
  }

  navigateTo = (routeName, params) => {
    const { navigation } = this.props;
    navigation.navigate(routeName, params);
  };

  logout = () => {
    this.props.logout(() => this.navigateTo(ROUTES.SCREENS.HOME));
  };

  renderItem = ({ item }) => {
    return (
      <View style={styles.settingOption}>
        <TouchableOpacity
          onPress={() =>
            this.navigateTo(ROUTES.SCREENS.BLOG, {
              title: item.title,
              htmlContent: item.content,
            })
          }>
          <Text
            style={styles.settingsOptionText}>{`${item.title.rendered}`}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View>
        <Text style={styles.userGreeting}>{`Hi ${this.props.user}!`}</Text>
        {this.props.loading ? (
          <Text style={styles.loading}>Loading...</Text>
        ) : (
          <View>
            <FlatList
              data={this.props.pages}
              renderItem={this.renderItem}
              keyExtractor={(item) => `${item.id}`}
            />
            <TouchableOpacity
              style={styles.settingOption}
              onPress={this.logout}>
              <Text style={styles.settingsOptionText}>Logout</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

export default withNavigation(SettingsScreen);
