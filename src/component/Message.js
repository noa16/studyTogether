import React from "react";

import classes from "./Message.module.css";

import ReactEmoji from "react-emoji";

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className={classes.messageContainer} className={classes.justifyEnd}>
      <p className={classes.sentText}>{trimmedName}</p>
      <div className={classes.messageBox} className={classes.backgroundBlue}>
        <p className={classes.messageText} className={classes.colorWhite}>
          {ReactEmoji.emojify(text)}
        </p>
      </div>
    </div>
  ) : (
    <div className={classes.messageContainer} className={classes.justifyStart}>
      <div className={classes.messageBox} className={classes.backgroundLight}>
        <p className={classes.messageText} className={classes.colorDark}>
          {ReactEmoji.emojify(text)}
        </p>
      </div>
      <p className={classes.sentText}>{user}</p>
    </div>
  );
};

export default Message;
