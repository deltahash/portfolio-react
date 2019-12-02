import React from 'react';
import FlatFooter from '../Footer/FlatFooter';
import classes from './OrderContent.module.css';

function OrderContent() {
  return (
    <div className={classes.OrderContent}>
      <div className={classes.Card}>
        <h1>MAKE AN ORDER</h1>
        <button>SUBMIT</button>
      </div>
      <FlatFooter />
    </div>
  );
}

export default OrderContent;
