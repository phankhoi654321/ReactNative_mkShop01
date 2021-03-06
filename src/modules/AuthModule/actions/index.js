import * as ActionTypes from "./types";
import axiosClient from "../../../config/axiosClient";
import { NavigationActions } from "react-navigation";

// Register User
//Actions must be plain objects. Use custom middleware for async actions.   //dispatch => thunk
export const registerUser = userdata => dispatch => {
  axiosClient
    .post("/api/users/register", userdata)
    .then(res =>
      dispatch(NavigationActions.navigate({ routeName: "SignInScreen" }))
    )
    // err.response tra ve nhung error tu server, .data de lay error
    .catch(err => {
      console.log(err.response.data),
        dispatch({
          type: ActionTypes.GET_ERRORS,
          payload: err.response.data
        });
    });
};

export const loginUser = userdata => dispatch => {
  axiosClient
    .post("/api/users/login", userdata)
    .then(res => {
      dispatch({
        type: ActionTypes.SET_CURRENT_USER,
        payload: res.data,
        errors: {}
      });
      dispatch(NavigationActions.navigate({ routeName: "Drawer" }));
    })
    // err.response tra ve nhung error tu server, .data de lay error
    .catch(err => {
      console.log(err.response.data),
        dispatch({
          type: ActionTypes.GET_ERRORS,
          payload: err.response.data
        });
    });
};
