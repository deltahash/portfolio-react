import React from "react";
import classes from "./MobileView.module.css";

export default function Shojol() {
  return (
    <div>
      <div className={classes.ProfilePrimary}>
        <div className={classes.ProfileImage}>
          <img src="" alt="" />
        </div>
        <div className={classes.ProfileInfo}>
          <h2>MD. ZIAUR RAHMAN</h2>
          <h3>Senior Adroid Developer</h3>
        </div>
      </div>
    </div>
  );
}
