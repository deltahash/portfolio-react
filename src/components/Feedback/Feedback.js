import React from "react";

import Slider from "../SliderDots/Sliderdots";
import MobileProfile from "./FeedbackProfile/MobileView/MobileView";
import WindowProfile from "./FeedbackProfile/WindowView/WindowView";

import classes from "./Feedback.module.css";

const Feedback = () => (
  <div>
    <div className="globalWindowDisplay">
      <div className={classes.FeedbackWindow}>
        <div className={classes.FeedbackPair}>
          <WindowProfile />
          <WindowProfile />
        </div>

        <Slider />
      </div>
    </div>

    <div className="mobileDisplay">
      <div className={classes.FeedbackMobile}>
        <MobileProfile />
        <Slider />
      </div>
    </div>
  </div>
);

export default Feedback;
