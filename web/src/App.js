import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';
import { store, persistor } from './store';

import Routes from '~/routes';
import history from '~/services/history';
import GlobalStyle from '~/styles/global';
import ModalManager from '~/components/Modal/ModalManager';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <ModalManager />
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={3200} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
