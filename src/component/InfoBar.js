import React from "react";
import classes from "./InfoBar.module.css";

import onlineIcon from "../images/onlineIcon.png";
import closeIcon from "../images/closeIcon.png";

const InfoBar = ({ room }) => (
  <div className={classes.infoBar}>
    <div className={classes.leftInnerContainer}>
      <h3>{room}</h3>
    </div>
    <div className={classes.rightInnerContainer}>
      <a href="/">
        <img src={closeIcon} alt="close icon" />
      </a>
    </div>
  </div>
);

export default InfoBar;
