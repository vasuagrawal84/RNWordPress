import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { default as ROUTES } from '../constants/routeNames';
import { Home, Main, Blog } from '../screens';

const stackNavigatior = createStackNavigator(
  {
    [ROUTES.SCREENS.HOME]: {
      screen: Home,
      navigationOptions: {
        header: () => null,
      },
    },
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

export default createSwitchNavigator({
  stackNavigatior,
});
