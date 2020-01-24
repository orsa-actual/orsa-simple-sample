import React from 'react';
import PropTypes from 'prop-types';

/**
 * A Box component.
 * @param {any} children - Children for the option.
 * @param {string} title - The title of the box.
 */
const Box = ({ children, title }) => (
  <div className="box">
    <div className="title">
      {title}
    </div>
    {...children}
  </div>
);

Box.propTypes = {
  title: PropTypes.string,
};

export default Box;
