import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container, TextInput } from './styles';

function Input({ style, icon, ...rest }, ref) {
  return (
    <Container style={style}>
      {icon && <Icon name={icon} size={25} color="rgba(255,255,255, 0.5)" />}
      <TextInput {...rest} ref={ref} />
    </Container>
  );
}

Input.defaultProps = {
  style: {},
  icon: null,
};

Input.propTypes = {
  /**
   * Define an icon for the input.
   */
  icon: PropTypes.string,
  /**
   * Applies a style for the input.
   */
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default forwardRef(Input);
