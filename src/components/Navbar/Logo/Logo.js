import React from "react";

import Image from "../../UI/Image/Image";

import LogoImage from "../../../assets/images/logo.svg";

import classes from "./Logo.module.css";

const Logo = () => (
  <div className={classes.Logo}>
    <li className={classes.logo}>
      <Image src={LogoImage} />
    </li>
  </div>
);

export default Logo;
