import React from "react";
import Logo from "../../../assets/image/Logo.svg";
import classes from "./Logo.module.css";

const logo = props => {
  return (
    <div className={classes.Logo}>
      {" "}
      <li className={classes.logo}>
        <img src={Logo} alt="LOGO" />
      </li>
    </div>
  );
};

export default logo;
