import React from 'react';
import { Link } from 'react-router-dom';
import classes from './OrderButton.module.css';

function OrderButton() {
  return (
    <div className={classes.OrderButton}>
      <Link to="/order">
        <button>Order Your Product</button>
      </Link>
    </div>
  );
}

export default OrderButton;
