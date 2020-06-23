import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { default as ROUTES } from '../constants/routeNames';
import { Home, Main, Blog, Settings } from '../screens';

const blogsStack = createStackNavigator(
  {
    [ROUTES.SCREENS.MAIN]: {
      screen: Main,
      navigationOptions: {
        header: () => null,
      },
    },
    [ROUTES.SCREENS.BLOG]: {
      screen: Blog,
      navigationOptions: {
        headerTitle: '10 Up Blogs!',
        headerBackTitle: 'Back',
      },
    },
  },
  {
    headerMode: 'float',
  },
);

const settingsStack = createStackNavigator({
  [ROUTES.SCREENS.SETTINGS]: {
    screen: Settings,
    navigationOptions: {
      header: () => null,
    },
  },
  [ROUTES.SCREENS.BLOG]: {
    screen: Blog,
    navigationOptions: {
      headerTitle: '10 Up Blogs!',
      headerBackTitle: 'Back',
    },
  },
});

const tabNav = createBottomTabNavigator(
  {
    Blogs: { screen: blogsStack },
    Pages: { screen: settingsStack },
  },
  {
    tabBarOptions: {
      inactiveBackgroundColor: 'white',
      activeBackgroundColor: '#001B55',
      inactiveTintColor: '#001B55',
      activeTintColor: 'white',
    },
  },
);

export default createSwitchNavigator({
  [ROUTES.SCREENS.HOME]: {
    screen: Home,
    navigationOptions: {
      header: () => null,
    },
  },
  tabNav,
});
