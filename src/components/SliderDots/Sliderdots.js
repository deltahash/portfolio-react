import React from 'react';
import Dot from '../Dots/Dot/Dot';
import CurrentDot from '../Dots/CurrentDot/CurrentDot';

import classes from './SliderDots.module.css';

const Sliderdots = () => (
  <div>
    <div className={classes.SlideDots}>
      <Dot></Dot>
      <Dot></Dot>
      <CurrentDot></CurrentDot>
      <Dot></Dot>
    </div>
  </div>
);

export default Sliderdots;
