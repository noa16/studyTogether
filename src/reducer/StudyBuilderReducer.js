import React from "react";
import * as actionTypes from "../store/Actions/ActionsTypes";
const initialState = {
  data: "noa",
  groups: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POST_GROUP:
      return {
        ...state,
        data: action.value,
      };
    case actionTypes.GETGROUP:
      console.log(action.value[0].location + "groups in reducer");
      return {
        ...state,
        groups: [...action.value],
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
