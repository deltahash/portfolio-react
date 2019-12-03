import React from 'react';
import classes from '../Footer.module.css';
import FacebookImage from '../../../assets/images/ic_facebook.svg';
import InstagramImage from '../../../assets/images/ic_instagram.svg';
import LinkedinImage from '../../../assets/images/ic_linkedin.svg';
import GithubLogoImage from '../../../assets/images/ic_git.svg';
import Image from '../../UI/Image/Image';
export default function SocialItemsMobile() {
  return (
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
  );
}
