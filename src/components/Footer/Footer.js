import React from "react";
import classes from "./Footer.module.css";

import Image from "../UI/Image/Image";
import FooterItems from "./FooterItems/FooterItems";

import FacebookImage from "../../assets/images/ic_facebook.svg";
import InstagramImage from "../../assets/images/ic_instagram.svg";
import LinkedinImage from "../../assets/images/ic_linkedin.svg";
import GithubLogoImage from "../../assets/images/ic_git.svg";

const Footer = () => (
  <footer className={classes.Footer}>
    <div className={classes.FooterMenuItemsWindow}>
      <FooterItems />
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
      <FooterItems />
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
