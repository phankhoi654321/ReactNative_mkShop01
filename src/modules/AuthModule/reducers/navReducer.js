import { combineReducers } from "redux";
import { NavigationActions } from "react-navigation";

import { RootNavigator } from "../../../navigators/screens/AppNavigator";

// Start with two routes: The Main screen, with the Login screen on top.
// const firstAction = RootNavigator.router.getActionForPathAndParams("SignInScreen");
const firstAction = RootNavigator.router.getStateForAction("SignInScreen");
// const tempNavState = RootNavigator.router.getStateForAction(firstAction);
// const secondAction = RootNavigator.router.getActionForPathAndParams("SignUpScreen");
const initialNavState = RootNavigator.router.getStateForAction(
  //   secondAction
  // tempNavState
  firstAction
);

export default (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    case "SignIn":
      nextState = RootNavigator.router.getStateForAction(
        // NavigationActions.back(),
        NavigationActions.navigate({ routeName: "SignInScreen" }),
        state
      );
      break;
    case "SignUp":
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: "SignUpScreen" }),
        state
      );
      break;
    default:
      nextState = RootNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};
