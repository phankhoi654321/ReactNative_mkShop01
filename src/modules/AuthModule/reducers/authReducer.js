import * as ActionTypes from "../actions/types";
import isEmpty from "../components/is-empty";

const initialState = {
  isAuthenticated: false,
  user: {},
  // errors: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
        // errors: action.errors
      };
    default:
      return state;
  }
};
