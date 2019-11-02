import React from "react";

import Avatar from "../Avatar/Avatar";
import FeedbackItem from "../FeedbackItem/FeedbackItem";

import classes from "./WindowView.module.css";

const WindowView = () => (
  <div className="globalWindowDisplay">
    <Avatar className={classes.ProfileImage} />

    <div className={classes.FeedbackBlock}>
      <FeedbackItem />
    </div>
  </div>
);

export default WindowView;
