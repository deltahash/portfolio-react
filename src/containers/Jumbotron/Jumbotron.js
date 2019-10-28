import React from "react";
import SliderDot from "../SliderDots/Sliderdots";
import classes from "./Jumbotron.module.css";

const jumbotron = props => {
  return (
    <div className={classes.Jumbotron}>
      <div className="mobileDisplay">
        <div className={classes.JumbolMobile}>
          <SliderDot></SliderDot>
        </div>
      </div>
      <div className="windowDisplay">
        <div className={classes.JumbolWindow}>
          <SliderDot></SliderDot>
        </div>
      </div>
    </div>
  );
};

export default jumbotron;
