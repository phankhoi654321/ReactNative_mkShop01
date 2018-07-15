import React, { Component } from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import authReducer from "./src/modules/AuthModule/reducers/authReducer";
import errorReducer from "./src/modules/AuthModule/reducers/errorReducer";
import navReducer from "./src/modules/AuthModule/reducers/navReducer";
import productReducer from "./src/modules/ProductModule/reducers/productReducer";
import shoppingCartReducer from "./src/modules/ProductModule/reducers/shoppingCartReducer";
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
  authReducer,
  errorReducer,
  navReducer,
  productReducer,
  shoppingCartReducer
});
const initialState = {};

// STORE
const store = createStore(
  rootReducer,
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
