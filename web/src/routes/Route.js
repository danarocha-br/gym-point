import React from 'react';
import Proptypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { store } from '~/store';
import AuthLayout from '~/pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const authenticated = store.getState().auth.authenticated;

  if (!authenticated && isPrivate) {
    return <Redirect to="/" />;
  }

  if (authenticated && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = authenticated ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.defaultProps = {
  isPrivate: false,
};

RouteWrapper.propTypes = {
  isPrivate: Proptypes.bool,
  component: Proptypes.oneOfType([Proptypes.element, Proptypes.func])
    .isRequired,
};
