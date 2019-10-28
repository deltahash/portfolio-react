import React from "react";

import classes from "./PrimaryTile.module.css";
import PrimaryTileImage from "../../../assets/image/PrimaryTile.svg";

export default function PrimaryTile() {
  return (
    <div className={classes.TilePrimary}>
      <img src={PrimaryTileImage} alt="" />
    </div>
  );
}
