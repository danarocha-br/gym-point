import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Login from './pages/Login';
import Dashboard from '~/pages/Dashboard';
import Orders from '~/pages/Orders';
import Profile from '~/pages/Profile';
import colors from '~/styles/colors';

export default (logged = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Login: createSwitchNavigator({
          Login,
        }),
        App: createBottomTabNavigator(
          {
            Dashboard,
            Orders,
            Profile,
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              showLabel: false,
              activeTintColor: `${colors.primary}`,
              inactiveTintColor: `${colors.greyMd}`,
              labelStyle: {
                fontSize: 14,
                fontWeight: 'bold',
                textTransform: 'uppercase',
              },
              style: {
                backgroundColor: 'rgba(255,255,255, 0.1)',
                marginBottom: 20,
                justifyContent: 'center',
              },
            },
          }
        ),
      },
      {
        initialRouteName: logged ? 'App' : 'Login',
      }
    )
  );
