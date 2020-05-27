import * as ActionTypes from "./ActionsTypes";
import axios from "../../axios/axios";

export const postGroup = (resData) => {
  return {
    type: ActionTypes.POST_GROUP,
    value: resData,
  };
};

export const getGroupAction = (groups) => {
  return {
    type: ActionTypes.GETGROUP,
    value: groups,
  };
};

export const initGroup = (data) => {
  return (dispatch) => {
    axios
      .post("/addGroup", {
        location: data.location,
        topic: data.topic,
        info: data.info,
      })
      .then((response) => {
        dispatch(postGroup(response));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getGroups = () => {
  let groups;
  return async (dispatch) => {
    await axios
      .get("/getGroups")
      .then((res) => {
        groups = JSON.parse(JSON.stringify(res.data));
        console.log(groups[0].location + "groups in component action");
        dispatch(getGroupAction(groups));
      })
      .catch((e) => {
        console.log(e);
      });
  };
};
