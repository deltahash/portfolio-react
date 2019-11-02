import React from 'react';
import classes from './MobileView.module.css';
import Rashek from './Rashek';
import Nur from './Nur';
import Shojol from './Shojol';
import Atul from './Atul';
export default function MobileView() {
  return (
    <div className={classes.ProfilesMobile}>
      <Rashek />
      <Nur />
      <Shojol />
      <Atul />
    </div>
  );
}
