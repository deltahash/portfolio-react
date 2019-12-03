import React from 'react';
import { Link } from 'react-router-dom';
import classes from './FeedbackButton.module.css';
function FeedbackButton() {
  return (
    <div className={classes.FeedbackButton}>
      <Link to="/feedbacksection">
        <button>Drop Your Feedback</button>
      </Link>
    </div>
  );
}

export default FeedbackButton;
