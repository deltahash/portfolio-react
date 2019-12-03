import React from 'react';
import Image from '../UI/Image/Image';
import FacebookImage from '../../assets/images/ic_facebook.svg';
import InstagramImage from '../../assets/images/ic_instagram.svg';
import LinkedinImage from '../../assets/images/ic_linkedin.svg';
import GithubLogoImage from '../../assets/images/ic_git.svg';
import FooterItem from './FooterItems/FooterItemsMobile';
import SocialFooterMobile from './FooterSocialItems/SocialItemsMobile';

import classes from './FlatFooter.module.css';
// import SocialItemsMobile from './FooterSocialItems/SocialItemsMobile';

function FlatFooter() {
  return (
    <div className={classes.FlatFooter}>
      <div className={classes.FlatFooterText}>
        <h3>Contact Us</h3>
        <h3>Privacy</h3>
        <h3>Terms and policy</h3>
      </div>
      <div className={classes.FlatFooterSocial}>
        <Image src={FacebookImage} />
        <Image src={GithubLogoImage} />
        <Image src={InstagramImage} />
        <Image src={LinkedinImage} />
      </div>
      <FooterItem />
      <SocialFooterMobile />
    </div>
  );
}

export default FlatFooter;
