import React from "react";

import classes from "./PrimaryTile.module.css";

import PrimaryTileImage from "../../../assets/images/PrimaryTile.svg";

const PrimaryTile = () => (
  <div className={classes.TilePrimary}>
    <img src={PrimaryTileImage} alt="" />
  </div>
);

export default PrimaryTile;
