import React, { useState, Component } from "react";
import classes from "./Submit.module.css";
import { connect } from "react-redux";
import * as actions from "../store/Actions/Actions";
class Submit extends Component {
  state = {
    location: null,
    topic: null,
    info: null,
  };

  handleSubmit = (e, location, topic, info) => {
    e.preventDefault();
    this.props.postGroup({ location, topic, info });
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value, //access to an object
    });
  };

  render() {
    return (
      <section class="section contact" className={classes.submit} id="contact">
        <div class="section-center contact-center">
          <article className={classes.submitTitle}>
            <h3>want latest tour info and updates?</h3>
            <p>Sign up for newsletter and stay up to date</p>
          </article>
          <form
            className={classes.form}
            onSubmit={(e) =>
              this.handleSubmit(
                e,
                this.state.location,
                this.state.topic,
                this.state.info
              )
            }
          >
            <input
              type="text"
              id="location"
              className={classes.formControl}
              placeholder="location"
              onChange={(e) => this.handleChange(e)}
            />
            <input
              type="text"
              id="topic"
              className={classes.formControl}
              placeholder="topic"
              onChange={(e) => this.handleChange(e)}
            />
            <textarea
              className={classes.moreInfo}
              placeholder="more info"
              id="info"
              onChange={(e) => this.handleChange(e)}
            />
            <button type="submit" className={classes.btnsubmit}>
              Add Group
            </button>
          </form>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    // getGroups: () => dispatch(actionCreator.initGroup(0)),
    postGroup: (FormDetailes) => dispatch(actions.initGroup(FormDetailes)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Submit);
