import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Wrapper({ children }) {
  return <Container>{children}</Container>;
}

Wrapper.propTypes = {
  /**
   * Defines the children for the component.
   */
  children: PropTypes.element.isRequired,
};
