import * as ActionTypes from "../actions/types";

const defaultState = {
  isAuthenticated: false,
  loading: false,
  loggedInUser: {},
  errors: {},
  login: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.GET_ERRORS:
      return action.payload;
    case "REGISTER":
      return { ...state, login: true };
    default:
      return defaultState;
  }
};
