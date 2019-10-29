import React from "react";
import classes from "./WindowView.module.css";

export default function Nur() {
  return (
    <div>
      <div className={classes.ProfileSecondary}>
        <div className={classes.ProfileInfo}>
          <h2>NURUL ISLAM</h2>
          <h3>CTO</h3>
        </div>
        <div className={classes.ProfileImage}>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}
