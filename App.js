import React, { Component } from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import errorReducer from "./src/modules/AuthModule/reducers/errorReducer";
import navReducer from "./src/modules/AuthModule/reducers/navReducer";
// import productReducer from './src/modules/ProductModule/reducers';
import axiosClient from "./src/config/axiosClient";

// import AppNavigator from "./src/navigators/screens/AppNavigator";
import {
  AppNavigator,
  middleware
} from "./src/navigators/screens/AppNavigator";
import SignUpContainer from "./src/modules/AuthModule/containers/SignUpContainer";

// MIDDLEWARE
const middewares = [thunkMiddleware, middleware];

const rootReducer = combineReducers({
  errorReducer,
  navReducer
  // productReducer
});
const initialState = {};

// STORE
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middewares))
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
