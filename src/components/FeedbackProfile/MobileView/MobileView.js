import React from "react";
import classes from "./MobileView.module.css";
export default function MobileView() {
  return (
    <div>
      <div className={classes.ProfileImage}>
        <img src="" alt="" />
      </div>
      <div className={classes.FeedbackItem}>
        <h2>JHON DOE</h2>
        <h3>CEO</h3>
        <h3>@microsoft</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          assumenda velit asperiores reiciendis vitae minus, porro
          exercitationem voluptates quas totam voluptatum odit repellat
          voluptatem ipsum atque cum eaque vel odio.
        </p>
      </div>
    </div>
  );
}
