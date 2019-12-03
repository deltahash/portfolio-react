import React from 'react';
import classes from './Footer.module.css';

import FooterItemsWindow from './FooterItems/FooterItemsWindow';
import FooterItemsMobile from './FooterItems/FooterItemsMobile';
import SocialItemsWindow from './FooterSocialItems/SocialItemsWindow';
import SocialItemsMobile from './FooterSocialItems/SocialItemsMobile';

const Footer = () => (
  <footer className={classes.Footer}>
    <FooterItemsWindow />
    <SocialItemsWindow />
    <FooterItemsMobile />
    <SocialItemsMobile />
  </footer>
);

export default Footer;
