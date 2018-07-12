import { createSwitchNavigator } from "react-navigation";
import { connect } from "react-redux";
import StackNavigator from "./StackNavigator";
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";
// import TabNavigator from './TabNavigator';
// import DrawerNavigator from './DrawerNavigator';

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
);

const RootNavigator = createSwitchNavigator({
  Stack: StackNavigator
  //   Drawer: DrawerNavigator
  // Tab: TabNavigator,
});

const AppWithNavigationState = reduxifyNavigator(RootNavigator, "root");

// const AppNavigator = createSwitchNavigator({
//   Stack: StackNavigator
//   //   Drawer: DrawerNavigator
//   // Tab: TabNavigator,
// });

const mapStateToProps = state => ({
  state: state.nav
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };
