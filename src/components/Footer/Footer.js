import React from "react";
import classes from "./Footer.module.css";

import Image from "../UI/Image/Image";
import FooterItem from "./FooterItem/FooterItem";

import FacebookImage from "../../assets/image/facebook.svg";
import InstagramImage from "../../assets/image/Instagram.svg";
import LinkedinImage from "../../assets/image/linkedin.svg";
import GithubLogoImage from "../../assets/image/Git.svg";

const Footer = () => (
  <footer className={classes.Footer}>
    <div className={classes.FooterMenuItemsWindow}>
      <FooterItem />
    </div>

    <div className={classes.SocialItemsWindow}>
      <div className={classes.Paired}>
        <Image src={FacebookImage} />
        <Image src={GithubLogoImage} />
        <Image src={InstagramImage} />
        <Image src={LinkedinImage} />
      </div>
    </div>

    <div className={classes.FooterMenuItemsMobile}>
      <FooterItem />
    </div>

    <div className={classes.SocialItemsMobile}>
      <div className={classes.Paired}>
        <Image src={FacebookImage} />
        <Image src={GithubLogoImage} />
      </div>
      <div className={classes.Paired}>
        <Image src={InstagramImage} />
        <Image src={LinkedinImage} />
      </div>
    </div>
  </footer>
);

export default Footer;
