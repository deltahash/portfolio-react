import React from 'react';
import PropTypes from 'prop-types';

const NavbarItemWindow = ({ title }) => (
  <li className="globalWindowDisplay">
    <a href="#home">{title.toUpperCase()}</a>
  </li>
);

NavbarItemWindow.propTypes = {
  title: PropTypes.string.isRequired
};

export default NavbarItemWindow;
