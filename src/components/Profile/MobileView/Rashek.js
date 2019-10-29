import React from "react";
import classes from "./MobileView.module.css";

export default function Rashek() {
  return (
    <div>
      <div className={classes.ProfilePrimary}>
        <div className={classes.ProfileImage}>
          <img src="" alt="" />
        </div>
        <div className={classes.ProfileInfo}>
          <h2>RASHEK MD. HUMAYUN</h2>
          <h3>CEO</h3>
        </div>
      </div>
    </div>
  );
}
