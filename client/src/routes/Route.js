import React from 'react';
import Proptypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const logged = false;

  if (!logged && isPrivate) {
    return <Redirect to="/" />;
  }

  if (!logged && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  return <Route {...rest} component={Component} />;
}

RouteWrapper.defaultProps = {
  isPrivate: false,
  component: Proptypes.oneOfType([Proptypes.element, Proptypes.func])
    .isRequired,
};

RouteWrapper.propTypes = {
  isPrivate: Proptypes.bool,
};
