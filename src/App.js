import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Dashboard from './pages/dashboard';
import Order from './pages/order';
import FeedbackSection from './pages/feedback_section';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const app = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/order" component={Order} />
          <Route path="/feedbacksection" component={FeedbackSection} />
        </Switch>
      </div>
    </Router>
  );
};

export default app;
