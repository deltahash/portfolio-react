import React from 'react';
import FeedbacContent from '../components/FeedbackSection/FeedbackContent';
import FlatFooter from '../components/Footer/FlatFooter';
import Footer from '../components/Footer/Footer';
import classes from '../components/Footer/Footer.module.css';

function FeedbackSection() {
  return (
    <div>
      <FeedbacContent />
      <div className={classes.WindowDisplay}>
        <FlatFooter />
      </div>
      <div className={classes.MobileDisplay}>
        <Footer />
      </div>
    </div>
  );
}

export default FeedbackSection;
