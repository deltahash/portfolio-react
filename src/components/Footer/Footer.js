import React from "react";
import classes from "./Footer.module.css";

import Logo from "../UI/Logo/Logo";
import FooterItem from "./FooterItem/FooterItem";

import FacebookLogo from "../../assets/image/facebook.svg";
import InstagramLogo from "../../assets/image/Instagram.svg";
import LinkedinLogo from "../../assets/image/linkedin.svg";
import GithubLogo from "../../assets/image/Git.svg";

export default function Footer() {
  return (
    <footer className={classes.Footer}>
      <div className={classes.FooterMenuItemsWindow}>
        <FooterItem />
      </div>

      <div className={classes.SocialItemsWindow}>
        <div className={classes.Paired}>
          <Logo src={FacebookLogo} />
          <Logo src={GithubLogo} />
          <Logo src={InstagramLogo} />
          <Logo src={LinkedinLogo} />
        </div>
      </div>

      <div className={classes.FooterMenuItemsMobile}>
        <FooterItem />
      </div>

      <div className={classes.SocialItemsMobile}>
        <div className={classes.Paired}>
          <Logo src={FacebookLogo} />
          <Logo src={GithubLogo} />
        </div>
        <div className={classes.Paired}>
          <Logo src={InstagramLogo} />
          <Logo src={LinkedinLogo} />
        </div>
      </div>
    </footer>
  );
}
