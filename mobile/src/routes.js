import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';

export default createAppContainer(
  createSwitchNavigator({
    Login,
  })
);
