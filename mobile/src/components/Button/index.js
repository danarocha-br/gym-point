import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';

import { Container, Label } from './styles';

export default function Button({ children, isLoading, ...rest }) {
  return (
    <Container {...rest}>
      {isLoading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Label>{children}</Label>
      )}
    </Container>
  );
}

Button.defaultProps = {
  isLoading: false,
};

Button.propTypes = {
  /**
   * Defines the label for the button.
   */
  children: PropTypes.string.isRequired,
  /**
   * Applies a style for the button.
   */
  isLoading: PropTypes.bool,
  /**
   * Defines the function for the button.
   */
  onPress: PropTypes.func.isRequired,
};
