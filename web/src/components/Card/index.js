import React from 'react';
import PropTypes from 'prop-types';

import { CardWrapper } from './styles';

export default function Card({ children, fullHeight }) {
  return <CardWrapper fullHeight={fullHeight}>{children}</CardWrapper>;
}

Card.defaultProps = {
  fullHeight: false,
};

Card.propTypes = {
  /**
   * Defines the children for the component.
   */
  children: PropTypes.element.isRequired,
  /**
   * Defines if the card has fullHeight.
   */
  fullHeight: PropTypes.element,
};
