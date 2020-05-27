import { Link } from "react-router-dom";
import React, { useState } from "react";
import classes from "./Join.module.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <div className={classes.joinOuterContainer}>
      <div className={classes.joinInnerContainer}>
        <h1 className={classes.heading}>Chat</h1>
        <div>
          <input
            placeholder=""
            className={classes.joinInput}
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder=""
            className={classes.joinInput}
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="button mt-20" type="submit">
            sign in
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
