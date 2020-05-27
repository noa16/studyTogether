import React from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.navCenter}>
        <div className={classes.navHeader}>
          <img src="./images/logo.svg" class="nav-logo" alt="" />
          <button type="button" className={classes.navToggle} id="nav-toggle">
            <i class="fas fa-bars"></i>
          </button>
        </div>

        <ul className={classes.navlinks} id="nav-links">
          <li>
            <a
              href="#home"
              class="nav-link scroll-link"
              className={classes.navLink}
            >
              home
            </a>
          </li>

          <li>
            <a
              href="#about"
              class="nav-link scroll-link"
              className={classes.navLink}
            >
              about
            </a>
          </li>

          <li>
            <a
              href="#services"
              class="nav-link scroll-link"
              className={classes.navLink}
            >
              services
            </a>
          </li>

          <li>
            <a
              href="#featured"
              class="nav-link scroll-link"
              className={classes.navLink}
            >
              featured
            </a>
          </li>

          <li>
            <a
              href="#gallery"
              class="nav-link scroll-link"
              className={classes.navLink}
            >
              contact
            </a>
          </li>
        </ul>

        <ul class="nav-icons">
          <li>
            <a href="https://www.twitter.com" target="_blank" class="nav-icon">
              <i class="fab fa-facebook"></i>
            </a>
          </li>

          <li>
            <a href="https://www.twitter.com" target="_blank" class="nav-icon">
              <i class="fab fa-twitter"></i>
            </a>
          </li>

          <li>
            <a href="https://www.twitter.com" target="_blank" class="nav-icon">
              <i class="fab fa-squarespace"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
