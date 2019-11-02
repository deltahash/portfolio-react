import React from 'react';

import classes from './SecondaryTile.module.css';

import SecodaryTileImage from '../../../assets/images/SecondaryTile.svg';

const SecondaryTile = () => (
  <div className={classes.TileSecondary}>
    <img src={SecodaryTileImage} alt="" />
  </div>
);

export default SecondaryTile;
