import React from "react";
import classes from "./Footer.module.css";
import FacebookLogo from "../../assets/image/facebook.svg";
import InstagramLogo from "../../assets/image/Instagram.svg";
import LinkedinLogo from "../../assets/image/linkedin.svg";
import GithubLogo from "../../assets/image/Git.svg";

export default function Footer() {
  return (
    <footer className={classes.Footer}>
      <div className={classes.FooterMenuItemsWindow}>
        <h3>Contact Us</h3>
        <h3>Privacy</h3>
        <h3>Terms and policy</h3>
      </div>

      <div className={classes.SocialItemsWindow}>
        <div className={classes.Paired}>
          <div>
            <img src={FacebookLogo} alt="" />
          </div>
          <div>
            <img src={GithubLogo} alt="" />
          </div>

          <div>
            <img src={InstagramLogo} alt="" />
          </div>
          <div>
            <img src={LinkedinLogo} alt="" />
          </div>
        </div>
      </div>

      <div className={classes.FooterMenuItemsMobile}>
        <h3>Contact Us</h3>
        <h3>Privacy</h3>
        <h3>Terms and policy</h3>
      </div>

      <div className={classes.SocialItemsMobile}>
        <div className={classes.Paired}>
          <div>
            <img src={FacebookLogo} alt="" />
          </div>
          <div>
            <img src={GithubLogo} alt="" />
          </div>
        </div>
        <div className={classes.Paired}>
          <div>
            <img src={InstagramLogo} alt="" />
          </div>
          <div>
            <img src={LinkedinLogo} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}
