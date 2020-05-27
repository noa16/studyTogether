import React from "react";

import classes from "./Input.module.css";

const Input = ({ setMessage, sendMessage, message }) => (
  <form className={classes.form}>
    <input
      className={classes.input}
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={(event) =>
        event.key === "Enter" ? sendMessage(event) : null
      }
    />
    <button className={classes.sendButton} onClick={(e) => sendMessage(e)}>
      Send
    </button>
  </form>
);

export default Input;
