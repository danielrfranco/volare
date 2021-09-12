import React from 'react';
import PropTypes from 'prop-types';

const NavLink = ({ children = '', className = '', ...otherProps }) => (
  <a className={`navlink ${className}`} {...otherProps}>
    {children}
  </a>
);

NavLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default NavLink;
