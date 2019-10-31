import React from "react";

import classes from "./Tiles.module.css";
import PrimaryTile from "../../components/Tilepair/PrimaryTile/PrimaryTile";
import SecondaryTile from "../../components/Tilepair/SecondaryTile/SecondaryTile";
export default function Tiles() {
  return (
    <div>
      <div className="globalWindowDisplay">
        <div className={classes.TilesBoxWindow}>
          <div className={classes.TilePair}>
            <PrimaryTile />
            <SecondaryTile />
            <PrimaryTile />
            <SecondaryTile />
            <PrimaryTile />
            <SecondaryTile />
            <PrimaryTile />
            <SecondaryTile />
          </div>
          <div className={classes.TilePair}>
            <SecondaryTile />
            <PrimaryTile />
            <SecondaryTile />
            <PrimaryTile />
            <SecondaryTile />
            <PrimaryTile />
            <SecondaryTile />
            <PrimaryTile />
          </div>
        </div>
      </div>
      <div className="mobileDisplay">
        <div className={classes.TilesBoxMobile}>
          <div className={classes.TilePair}>
            <PrimaryTile />
            <SecondaryTile />
          </div>
          <div className={classes.TilePair}>
            <SecondaryTile />
            <PrimaryTile />
          </div>
        </div>
      </div>
    </div>
  );
}
