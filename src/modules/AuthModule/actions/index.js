import * as ActionTypes from "./types";
import axiosClient from "../../../config/axiosClient";

// Register User
//Actions must be plain objects. Use custom middleware for async actions.   //dispatch => thunk
export const registerUser = (userdata, history) => dispatch => {
  axiosClient
    .post("/api/users/register", userdata)
    .then(res => history.push("/login"))
    // err.response tra ve nhung error tu server, .data de lay error
    .catch(err =>
      dispatch({
        type: ActionTypes.GET_ERRORS,
        payload: err.response.data
      })
    );
};
