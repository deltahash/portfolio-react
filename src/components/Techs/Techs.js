import React from "react";
import classes from "./Techs.module.css";
import ReactLogo from "../../assets/image/React.svg";
import DotNetLogo from "../../assets/image/DotNet.svg";
import AndroidLogo from "../../assets/image/Android.svg";
import IOSLogo from "../../assets/image/IOS.svg";
export default function Techs() {
  return (
    <div>
      <div className="windowDisplay">
        <div className={classes.TechsWindow}>
          <div>
            <img src={ReactLogo} alt="" />
            <h3>React</h3>
          </div>
          <div>
            <img src={DotNetLogo} alt="" />
            <h3>Dot Net Core</h3>
          </div>

          <div>
            <img src={AndroidLogo} alt="" />
            <h3>Android</h3>
          </div>

          <div>
            <img src={IOSLogo} alt="" />
            <h3>IOS</h3>
          </div>
        </div>
      </div>
      <div className="mobileDisplay">
        <div className={classes.TechsMobile}>
          <div className={classes.TopLayer}>
            <div className={classes.BottomLayer}>
              <img src={ReactLogo} alt="" />
              <h3>React</h3>
            </div>
            <div className={classes.BottomLayer}>
              <img src={DotNetLogo} alt="" />
              <h3>Dot Net Core</h3>
            </div>
          </div>
          <div className={classes.TopLayer}>
            <div className={classes.BottomLayer}>
              <img src={AndroidLogo} alt="" />
              <h3>Android</h3>
            </div>
            <div className={classes.BottomLayer}>
              <img src={IOSLogo} alt="" />
              <h3>IOS</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
