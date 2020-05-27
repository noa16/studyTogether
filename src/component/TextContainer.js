import React from "react";

import onlineIcon from "../images/onlineIcon.png";

import classes from "./TextContainer.module.css";

const TextContainer = ({ users }) => (
  <div className={classes.textContainer}>
    {users ? (
      <div>
        <h1>People currently chatting:</h1>
        <div className={classes.activeContainer}>
          <h2>
            {users.map(({ name }) => (
              <div key={name} className={classes.activeItem}>
                {name}
                <img alt="Online Icon" src={onlineIcon} />
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
