import React from "react";
import classes from "./About.module.css";
import bookPrimary from "../images/bookPrimary.jpg";
const About = () => {
  return (
    <section class="section" id="about">
      <div class="section-title">
        <h2>
          about <span>us</span>
        </h2>
      </div>
      <div class="section-center about-center" className={classes.aboutCenter}>
        <article className={classes.aboutImg}>
          <img
            src={bookPrimary}
            className={classes.aboutPhoto}
            alt="awesome beach"
          />
        </article>
        <article className={classes.aboutInfo}>
          <h3>explore the difference</h3>
          <p></p>
          <p>
            Sometimes we want to study with friends to get help or just not to
            feel alone You came to the right place! On our site you can get
            information about people who study together in a group and ask them
            live chat questions So you don't have to feel alone just go to the
            site and study together
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
