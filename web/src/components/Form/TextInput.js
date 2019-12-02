import React from 'react';
import PropTypes from 'prop-types';

import { Container, TextInput } from './styles';

export function InputText({ style, name, title, type, ...rest }) {
  return (
    <Container style={style}>
      <TextInput
        type={type}
        name={name}
        id={name}
        autoComplete="off"
        {...rest}
      />
      <label id={name} htmlFor={name} title={title} data-title={title} />
    </Container>
  );
}

InputText.defaultProps = {
  style: {},
};

InputText.propTypes = {
  /**
   * Define a name for the input.
   */
  name: PropTypes.string.isRequired,
  /**
   * Define a label for the input.
   */
  title: PropTypes.string.isRequired,
  /**
   * Define the label type for the input.
   */
  type: PropTypes.string.isRequired,
  /**
   * Applies a style for the input.
   */
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default InputText;
