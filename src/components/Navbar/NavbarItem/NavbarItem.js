import React from 'react';
import PropTypes from 'prop-types';

const NavbarItem = ({ title }) => (
  <li className="globalWindowDisplay">
    <a href="#home">{title.toUpperCase()}</a>
  </li>
);

NavbarItem.propTypes = {
  title: PropTypes.string.isRequired
};

export default NavbarItem;
