import React from "react";
import Menu from "../../assets/image/hamburger.svg";
import classes from "./Navbar.module.css";
import Logo from "./Logo/Logo";

const navbar = () => {
  return (
    <div className={classes.Navbar}>
      {" "}
      <nav>
        <ul>
          <Logo />
          <li className="windowDisplay">
            <a href="#home">TECHS</a>
          </li>
          <li className="windowDisplay">
            <a href="#news">PROJECTS</a>
          </li>
          <li className="windowDisplay">
            <a href="#contact">PORTFOLIO</a>
          </li>
          <li className="windowDisplay">
            <a href="#about">FEEDBACK</a>
          </li>
          <li className="mobileDisplay">
            <img src={Menu} alt="" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default navbar;
