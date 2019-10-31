import React from "react";
import PropTypes from "prop-types";

import classes from "./Avatar.module.css";

const Avatar = () => {
  return (
    <div>
      <div className={classes.ProfileImage}>
        <img src="" alt="" />
      </div>
    </div>
  );
};

Avatar.propTypes = {
  classes: PropTypes.string.isRequired
};

export default Avatar;
