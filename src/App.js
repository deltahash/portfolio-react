import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./containers/Jumbotron/Jumbotron";
import Techs from "./components/Techs/Techs";
import Tiles from "./containers/Tiles/Tiles";

const app = () => {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <Techs />
      <Tiles />
    </div>
  );
};

export default app;
