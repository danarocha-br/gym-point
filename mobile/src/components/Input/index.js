import React, { forwardRef } from 'react';
import Proptypes from 'prop-types';

import { Container, TextInput } from './styles';

function Input({ style }, ref) {
  return (
    <Container style={style}>
      <TextInput {...rest} ref={ref} />
    </Container>
  );
}

Input.defaultProps = {
  style: {},
};

Input.propTypes = {
  style: Proptypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default forwardRef(Input);
