import React from 'react';
import uuidv4 from 'uuid/v4';
import { Link } from 'react-router-dom';

import NavbarItemWindow from './NavbarItem/NavbarItemWindow';

import NavbarItemMobile from './NavbarItem/NavbarItemMobile';
import Image from '../UI/Image/Image';
import Logo from './Logo/Logo';

import HamburgerImage from '../../assets/images/ic_hamburger.svg';

import classes from './Navbar.module.css';

const navItems = [
  {
    id: uuidv4(),
    title: 'Techs'
  },
  {
    id: uuidv4(),
    title: 'Projects'
  },
  {
    id: uuidv4(),
    title: 'Portfolio'
  },
  {
    id: uuidv4(),
    title: 'Feedback'
  }
];

const Navbar = () => {
  const navbarItemsWindow = navItems.reverse().map(navItem => {
    return <NavbarItemWindow key={navItem.id} title={navItem.title} />;
  });
  const navbarItemsMobile = navItems.reverse().map(navItem => {
    return <NavbarItemMobile key={navItem.id} title={navItem.title} />;
  });

  return (
    <nav className={classes.Navbar}>
      <ul>
        <Link to="/">
          <Logo />
        </Link>

        {navbarItemsWindow}
        <li className="mobileDisplay">
          <a href="/">
            <Image src={HamburgerImage} />
          </a>

          <ul>{navbarItemsMobile}</ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
