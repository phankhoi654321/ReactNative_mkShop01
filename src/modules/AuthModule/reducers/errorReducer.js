import * as ActionTypes from "../actions/types";

const initialState = {};

export default (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case ActionTypes.GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
};
