import React, { useState } from "react";
import classes from "./GroupCards.module.css";
import livingRoom from "../images/rowBook.jpg";
import Library from "../images/library.jpg";
import { Link } from "react-router-dom";
import Join from "./Join";
const GroupCards = (props) => {
  console.log(props.info);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <article className={classes.groupCard}>
      <div className={classes.groupImageContainer}>
        <img src={livingRoom} className={classes.groupImage} alt="" />
        <Link to="/join">
          <p class={classes.groupChat}>For chat with the group</p>
        </Link>
      </div>

      <div class={classes.groupInfo}>
        <div className={classes.groupTitle}>
          <h4>tibet adventure</h4>
        </div>
        <p>
          Location:{props.location}
          <br></br>
          topic:{props.topic}
          <br></br>
          more information:{props.info}
        </p>
        <div className={classes.groupFooter}>
          <p>
            <span>
              <i class="fas fa-map"></i>
            </span>
          </p>
        </div>
      </div>
    </article>
  );
};

export default GroupCards;
