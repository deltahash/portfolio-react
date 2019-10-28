import React from "react";

import classes from "./SecondaryTile.module.css";

import SecodaryTileImage from "../../../assets/image/SecondaryTile.svg";

export default function SecondaryTile() {
  return (
    <div className={classes.TileSecondary}>
      <img src={SecodaryTileImage} alt="" />
    </div>
  );
}
