import React from 'react';
import PropTypes from 'prop-types';

/**
 * A button component.
 * @param {any} children - Children for the option.
 * @param {func} onClick - Click event handler.
 */
const Button = ({ children, onClick }) => (
  <Button className="btn" onClick={onClick}>
    {...children}
  </Button>
);

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
