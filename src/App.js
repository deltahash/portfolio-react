import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./containers/Jumbotron/Jumbotron";
import Techs from "./components/Techs/Techs";
import Tiles from "./containers/Tiles/Tiles";
import Profile from "./components/Profile/Profile";
import Feedback from "./containers/Feedback/Feedback";
import Footer from "./components/Footer/Footer";

const app = () => {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <Techs />
      <Tiles />
      <Profile />
      <Feedback />
      <Footer />
    </div>
  );
};

export default app;
