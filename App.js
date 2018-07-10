import React, { Component } from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import authReducer from "./src/modules/AuthModule/reducers";
// import productReducer from './src/modules/ProductModule/reducers';

import AppNavigator from "./src/navigators/screens/AppNavigator";

// MIDDLEWARE
const middewares = [thunkMiddleware];

const rootReducer = combineReducers({
  authReducer
  // productReducer
});

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
