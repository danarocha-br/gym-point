import React from 'react';
import PropTypes from 'prop-types';
import { IoIosAdd } from 'react-icons/io';

import { ButtonWrapper } from './styles';

export default function Button({
  label,
  isDisabled,
  onClick,
  isLoading,
  kind,
  icon,
}) {
  return (
    <ButtonWrapper
      type="submit"
      disabled={isDisabled}
      onClick={onClick}
      loading={isLoading}
      kind={kind}
    >
      {kind === 'icon' && icon === 'plus' && <IoIosAdd size="30px" />}
      {label}
    </ButtonWrapper>
  );
}

Button.defaultProps = {
  isDisabled: false,
  kind: 'default',
  icon: null,
};

Button.propTypes = {
  /**
   * Defines the button type.
   */
  kind: PropTypes.oneOf(['default', 'icon']),
  /**
   * Defines the action for the button.
   */
  label: PropTypes.string.isRequired,
  /**
   * Defines the icon for the button.
   */
  icon: PropTypes.string,
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
