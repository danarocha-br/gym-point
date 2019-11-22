import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Login from './pages/Login';
import Dashboard from '~/pages/Dashboard';

export default (logged = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Login: createSwitchNavigator({
          Login,
        }),
        App: createBottomTabNavigator({
          Dashboard,
        }),
      },
      {
        initialRouteName: logged ? 'App' : 'Login',
      }
    )
  );
