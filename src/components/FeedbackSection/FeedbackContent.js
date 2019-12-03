import React from 'react';
import classes from './FeedbackContent.module.css';

function FeedbackContent() {
  return (
    <div className={classes.FeedbackContent}>
      <div className={classes.Card}>
        <h1>LEAVE A FEEDBACK</h1>
        <div className={classes.LowerDivision}>
          <div className={classes.PhotoSection}>
            <div className={classes.PhotoDiv}></div>
            <button>Upload Photo</button>
          </div>
          <div className={classes.FormSection}>
            <button>SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackContent;
