import React from 'react';
import classes from './OrderContent.module.css';

function OrderContent() {
  return (
    <div className={classes.OrderContent}>
      <div className={classes.Card}>
        <h1>MAKE AN ORDER</h1>
        <button>SUBMIT</button>
      </div>
    </div>
  );
}

export default OrderContent;
