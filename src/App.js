import React from 'react';

import Jumbotron from './components/Jumbotron/Jumbotron';
import Navbar from './components/Navbar/Navbar';

const app = () => {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
    </div>
  );
};

export default app;
