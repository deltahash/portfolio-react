import React from 'react';
import uuidv4 from 'uuid/v4';

import NavbarItem from './NavbarItem/NavbarItem';
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
  const navbarItems = navItems.reverse().map(navItem => {
    console.log(navItem);
    return <NavbarItem key={navItem.id} title={navItem.title} />;
  });

  return (
    <nav className={classes.Navbar}>
      <ul>
        <Logo />
        {navbarItems}
        <li className="mobileDisplay">
          <Image src={HamburgerImage} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
