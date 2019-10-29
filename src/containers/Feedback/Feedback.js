import React from "react";
import classes from "./Feedback.module.css";
import Slider from "../SliderDots/Sliderdots";
import WindowProfile from "../../components/FeedbackProfile/WindowView/WindowView";
import MobileProfile from "../../components/FeedbackProfile/MobileView/MobileView";
export default function Feedback() {
  return (
    <div>
      <div className="windowDisplay">
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
}
