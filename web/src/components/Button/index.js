import React from 'react';
import PropTypes from 'prop-types';

import { ButtonWrapper } from './styles';

export default function Button({ label, isDisabled, onClick, isLoading }) {
  return (
    <ButtonWrapper
      type="submit"
      disabled={isDisabled}
      onClick={onClick}
      loading={isLoading}
    >
      {label}
    </ButtonWrapper>
  );
}

Button.defaultProps = {
  isDisabled: false,
};

Button.propTypes = {
  /**
   * Defines the action for the button.
   */
  label: PropTypes.string.isRequired,
  /**
   * Defines the action for the button.
   */
  onClick: PropTypes.func.isRequired,
  /**
   * Defines the look for disabled state.
   */
  isDisabled: PropTypes.func,
  /**
   * Defines the look for loading state.
   */
  isLoading: PropTypes.func.isRequired,
};
