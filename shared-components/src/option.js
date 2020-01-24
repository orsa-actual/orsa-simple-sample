import React from 'react';
import PropTypes from 'prop-types';

/**
 * An option component.
 * @param {any} children - Children for the option.
 * @param {bool} selected - True if the option is selected.
 * @param {any} value - The value of the option.
 */
const Option = ({ children, selected, value }) => (
  <option className="opt" selected={selected} value={value}>
    {...children}
  </option>
);

Option.propTypes = {
  selected: PropTypes.bool,
  value: PropTypes.any,
};

export default Option;
