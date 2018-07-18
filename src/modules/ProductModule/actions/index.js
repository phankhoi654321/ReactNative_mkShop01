import * as ActionTypes from "./types";
import axiosClient from "../../../config/axiosClient";

export const getProducts = () => {
  return dispatch => {
    dispatch({
      type: ActionTypes.GET_PRODUCTS
      // payload: axiosClient.get("/products")
    });
  };
};

export const addToCart = (product, quantity) => ({
  type: ActionTypes.ADD_TO_CART,
  product: product,
  quantity: quantity,
});

export const increaseQuantity = (product, quantity) => ({
  type: ActionTypes.INCREASE_QUANTITY,
  product: product,
  quantity: quantity,
});

export const decreaseQuantity = (product, quantity) => ({
  type: ActionTypes.DECREASE_QUANTITY,
  product: product,
  quantity: quantity,
});

export const totalQuantity = (product) => ({
  type: ActionTypes.TOTAL_QUANTITY,
  product: product,
});

export const removeItem = (product) => ({
  type: ActionTypes.REMOVE_FROM_CART,
  product: product,
});
