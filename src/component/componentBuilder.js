import React, { Component } from "react";
import classes from "./ComponentBuilder.module.css";

import Service from "./service";
import About from "./About";
import Groups from "./Groups";
import Footer from "./footer";
import Submit from "./Submit";
import Navbar from "./Navbar";

class componentBuilder extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <header>
          <div className={classes.hero}>
            <div className={classes.heroBanner}>
              <h1>Study Together</h1>
              <p>
                study along?? not anymore in this website you could find a
                student to study with!! just put your detailes what you are
                learning in whitch location and maybe someone will see and join
                you
              </p>
              <button className={classes.herobtn}>Login</button>
            </div>
          </div>
        </header>
        <About />
        <Service />
        <Groups
          getGroups={() => this.props.getGroups()}
          groups={this.props.groups}
          data={this.props.data}
        />
        <Submit />
        <Footer />
      </React.Fragment>
    );
  }
}

export default componentBuilder;
