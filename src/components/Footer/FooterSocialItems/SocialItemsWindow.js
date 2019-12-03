import React from 'react';
import classes from '../Footer.module.css';
import FacebookImage from '../../../assets/images/ic_facebook.svg';
import InstagramImage from '../../../assets/images/ic_instagram.svg';
import LinkedinImage from '../../../assets/images/ic_linkedin.svg';
import GithubLogoImage from '../../../assets/images/ic_git.svg';
import Image from '../../UI/Image/Image';

function SocialItemsWindow() {
  return (
    <div className={classes.SocialItemsWindow}>
      <div className={classes.Paired}>
        <Image src={FacebookImage} />
        <Image src={GithubLogoImage} />
        <Image src={InstagramImage} />
        <Image src={LinkedinImage} />
      </div>
    </div>
  );
}

export default SocialItemsWindow;
