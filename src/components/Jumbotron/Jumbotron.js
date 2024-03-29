import React from 'react';
import SliderDot from '../SliderDots/Sliderdots';
import classes from './Jumbotron.module.css';

const Jumbotron = () => (
  <div className={classes.Jumbotron}>
    <div className="mobileDisplay">
      <div className={classes.JumbolMobile}>
        <SliderDot></SliderDot>
      </div>
    </div>
    <div className="globalWindowDisplay">
      <div className={classes.JumbolWindow}>
        <SliderDot></SliderDot>
      </div>
    </div>
  </div>
);

export default Jumbotron;
