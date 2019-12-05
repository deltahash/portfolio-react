import React from 'react';
import PropTypes from 'prop-types';

const NavbarItemMobile = ({ title }) => (
  <li className="globalMobileDisplay">
    <a href="#home">{title.toUpperCase()}</a>
  </li>
);

NavbarItemMobile.propTypes = {
  title: PropTypes.string.isRequired
};

export default NavbarItemMobile;
