import React from 'react';
import PropTypes from 'prop-types';

import { ButtonWrapper } from './styles';

export default function Button({ label, disabled, icon, onClick }) {
  return (
    <ButtonWrapper type="submit" disabled={disabled} onClick={onClick}>
      {/* {icon && <icon></icon>} */}
      {label}
    </ButtonWrapper>
  );
}

Button.defaultProps = {
  color: 'primary',
  // size: "default",
  // icon: "line-chart",
  // type: "text-btn"
};

Button.propTypes = {
  /**
   * Sets the color for the button.
   */
  // color: PropTypes.oneOf([
  //   "primary",
  //   "subtle",
  //   "highlight",
  //   "secondary",
  //   "success",
  //   "transparent"
  // ]),
  /**
   * Sets the size of a button.
   */
  // size: PropTypes.oneOf(["xs", "sm", "default"]),
  /**
   * Defines the icon for the button.
   */
  // icon: PropTypes.oneOf([
  //   "line-chart",
  //   "pie-chart",
  //   "bar-chart",
  //   "arrow-left",
  //   "arrow-right",
  //   "fb",
  //   "google"
  // ]),
  /**
   * Defines the button type.
   */
  // type: PropTypes.oneOf(["icon", "link", "social"]),
  /**
   * Defines if the button is default or circular.
   */
  // shape: PropTypes.oneOf(["circle"]),
  /**
   * Defines the action for the button.
   */
  label: PropTypes.string,
  /**
   * Defines the action for the button.
   */
  onClick: PropTypes.func,
};
