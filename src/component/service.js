import React from "react";
import service from "./Service.module.css";
import classes from "./Service.module.css";

const Service = () => {
  return (
    <section className={classes.services} id="services">
      <div class="section-title">
        <h2>
          our <span>website</span>
        </h2>
      </div>

      <div class="section-center" className={classes.serviceCenter}>
        <article className={classes.service}>
          <span class="service-icon">
            <i class="fas fa-wallet fa-fw"></i>
          </span>
          <div className={classes.serviceinfo}>
            <h4 class="service-title">fun way to communicate</h4>
            <p className={classes.serviceText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              cupiditate, tempore reiciendis sit ipsum consequatur!
            </p>
          </div>
        </article>

        <article className={classes.service}>
          <span class="service-icon">
            <i class="fas fa-tree fa-fw"></i>
          </span>
          <div className={classes.serviceinfo}>
            <h4 class="service-title">make new friend</h4>
            <p className={classes.serviceText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              cupiditate, tempore reiciendis sit ipsum consequatur!
            </p>
          </div>
        </article>

        <article className={classes.service}>
          <span class="service-icon">
            <i class="fas fa-socks fa-fw"></i>
          </span>
          <div className={classes.serviceinfo}>
            <h4 class="service-title">amazing website for student</h4>
            <p className={classes.serviceText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              cupiditate, tempore reiciendis sit ipsum consequatur!
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Service;
