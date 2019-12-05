import React from 'react';
import FlatFooter from '../components/Footer/FlatFooter';
import OrderContent from '../components/Order/OrderContent';
import Footer from '../components/Footer/Footer';
import classes from '../components/Footer/Footer.module.css';

function Order() {
  return (
    <div>
      <OrderContent />
      <div className={classes.WindowDisplay}>
        <FlatFooter />
      </div>
      <div className={classes.MobileDisplay}>
        <Footer />
      </div>{' '}
    </div>
  );
}

export default Order;
