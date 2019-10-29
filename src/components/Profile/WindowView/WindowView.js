import React from "react";
import classes from "./WindowView.module.css";
import Rashek from "./Rashek";
import Nur from "./Nur";
import Shojol from "./Shojol";
import Atul from "./Atul";
export default function WindowView() {
  return (
    <div className={classes.ProfilesWindow}>
      <Rashek />
      <Nur />
      <Shojol />
      <Atul />
    </div>
  );
}
