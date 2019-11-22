import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Wrapper({ children, color }) {
  return <Container color={color}>{children}</Container>;
}

Wrapper.defaultProps = {
  color: 'dark',
};

Wrapper.propTypes = {
  /**
   * Defines if background is light or dark.
   */
  color: PropTypes.oneOf(['light', 'dark']),
  /**
   * Defines the children for the component.
   */
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
};
