import React, { useEffect, useState, Component } from "react";
import classes from "./Groups.module.css";
import { connect } from "react-redux";
import * as actions from "../store/Actions/Actions";
import GroupCards from "./GroupCards";
class Groups extends Component {
  async componentDidMount() {
    await this.props.getGroups();
    console.log(this.props.groups);
    Object.entries(this.props.groups).map(([key, value]) => {
      console.log(value.location);
    });
  }

  render() {
    return this.props.groups !== null ? (
      <section class="section" id="featured">
        <div class="section-title">
          <h2>
            Study <span>Groups</span>
          </h2>
        </div>
        <div class="section-center featured-center">
          <div className={classes.container}>
            {Object.entries(this.props.groups).map(([key, value]) => {
              return (
                <article className={classes.groupCard}>
                  <GroupCards
                    location={value.location}
                    topic={value.topic}
                    info={value.info}
                  />
                  )
                </article>
              );
            })}
          </div>
        </div>
      </section>
    ) : null;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getGroups: () => dispatch(actions.getGroups()),
  };
};

const mapStateToProps = (state) => {
  return {
    groups: state.groups,
    data: state.data,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Groups);
