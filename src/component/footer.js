import React from "react";
import classes from "./footer.module.css";

const footer = () => {
  return (
    <footer class="section footer" className={classes.footer}>
      <ul className={classes.footerLinks}>
        <li>
          <a
            href="#home"
            class="footer-link scroll-link"
            className={classes.footerLink}
          >
            home
          </a>
        </li>

        <li>
          <a
            href="#about"
            class="footer-link scroll-link"
            className={classes.footerLink}
          >
            about
          </a>
        </li>

        <li>
          <a
            href="#services"
            class="footer-link scroll-link"
            className={classes.footerLink}
          >
            services
          </a>
        </li>

        <li>
          <a
            href="#featured"
            class="footer-link scroll-link"
            className={classes.footerLink}
          >
            featured
          </a>
        </li>

        <li>
          <a
            href="#gallery"
            class="footer-link scroll-link"
            className={classes.footerLink}
          >
            gallery
          </a>
        </li>
      </ul>

      <ul class="footer-icons">
        <li>
          <a
            href="https://www.twitter.com"
            target="_blank"
            className={classes.footerIcon}
          >
            <i class="fab fa-facebook"></i>
          </a>
        </li>

        <li>
          <a
            href="https://www.twitter.com"
            target="_blank"
            className={classes.footerIcon}
          >
            <i class="fab fa-twitter"></i>
          </a>
        </li>

        <li>
          <a
            href="https://www.twitter.com"
            target="_blank"
            className={classes.footerIcon}
          >
            <i class="fab fa-squarespace"></i>
          </a>
        </li>
      </ul>

      <p className={classes.copyright}>
        copyright &copy; Study Together company <span id="date"></span>. all
        rights reserved
      </p>
    </footer>
  );
};

export default footer;
