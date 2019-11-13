import React from 'react';
import PropTypes from 'prop-types';
import { IoIosAdd } from 'react-icons/io';
import { FiTrash, FiEdit2 } from 'react-icons/fi';

import { ButtonWrapper } from './styles';

export default function Button({
  label,
  isDisabled,
  onClick,
  isLoading,
  kind,
  icon,
  color,
}) {
  return (
    <ButtonWrapper
      type="submit"
      disabled={isDisabled}
      onClick={onClick}
      loading={isLoading}
      kind={kind}
      color={color}
    >
      {kind === 'icon' && icon === 'plus' && <IoIosAdd size="30px" />}
      {kind === 'icon' && icon === 'trash' && <FiTrash size="20px" />}
      {kind === 'icon' && icon === 'edit' && <FiEdit2 size="20px" />}
      {label}
    </ButtonWrapper>
  );
}

Button.defaultProps = {
  isDisabled: false,
  kind: 'default',
  color: 'primary',
  icon: null,
  label: '',
};

Button.propTypes = {
  /**
   * Defines the button type.
   */
  kind: PropTypes.oneOf(['default', 'icon']),
  /**
   * Defines the button type.
   */
  color: PropTypes.oneOf(['primary', 'transparent']),
  /**
   * Defines the action for the button.
   */
  label: PropTypes.string,
  /**
   * Defines the icon for the button.
   */
  icon: PropTypes.oneOf(['plus', 'trash', 'edit']),
  /**
   * Defines the action for the button.
   */
  onClick: PropTypes.func.isRequired,
  /**
   * Defines the look for disabled state.
   */
  isDisabled: PropTypes.bool,
  /**
   * Defines the look for loading state.
   */
  isLoading: PropTypes.bool.isRequired,
};
