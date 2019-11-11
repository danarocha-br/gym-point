import React from 'react';
import PropTypes from 'prop-types';

import { CardWrapper } from './styles';

export default function Card({ children }) {
  return <CardWrapper>{children}</CardWrapper>;
}

Card.propTypes = {
  /**
   * Defines the children for the component.
   */
  children: PropTypes.element.isRequired,
};
