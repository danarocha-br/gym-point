import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';
import { store, persistor } from './store';

import { StatusBar } from 'react-native';

import Routes from './routes';
import colors from '~/styles/colors';

export default function src() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor={colors.purple} />
        <Routes />
      </PersistGate>
    </Provider>
  );
}
