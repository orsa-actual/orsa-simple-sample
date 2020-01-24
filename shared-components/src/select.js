import React from 'react';
import PropTypes from 'prop-types';

/**
 * A select component.
 * @param {any} children - Children for the option.
 * @param {any} value - The value of the option.
 */
const Select = ({ children, value }) => (
  <select className="selwood" value={value}>
    {...children}
  </select>
);

Select.propTypes = {
  value: PropTypes.any,
};

export default Select;
