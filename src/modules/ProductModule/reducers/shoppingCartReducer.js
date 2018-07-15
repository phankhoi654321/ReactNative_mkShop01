import * as ActionTypes from "../actions/types";
import products from "./productReducer";

const defaultState = {
  products: [],
  addedProducts: [],
  total: 0,
  shoppingCartVisible: false
};
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
updateTotal = (items) => {
  return items.reduce(
    (total, item) =>  //item is currentValue in array items
      (total + (item.product.price * item.quantity)), 0
  );
};

const shoppingCartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.GET_PRODUCTS:
      return {
        ...state
        // products: action.products
      };

    // case ActionTypes.SHOW_SHOPPING_CART:
    //   return {
    //     ...state,
    //     shoppingCartVisible: true
    //   };

    // case ActionTypes.HIDE_SHOPPING_CART:
    //   return {
    //     ...state,
    //     shoppingCartVisible: false
    //   };

    case ActionTypes.ADD_TO_CART:
      // FIND ITEM BEFORE ADD TO CART, IF EXISTS THEN UPDATE QUANTITY, ELSE ADD NEW ITEM WITH QUANTITY = 1
      var found = [...state.addedProducts].find(item => item.product.id === action.product.id);
      if (found) {
        found.quantity++;
        var total = updateTotal([...state.addedProducts]);
        return {
          ...state,
          addedProducts: [...state.addedProducts],
          total: total
        };
      }

      // ELSE ADD NEW ITEM WITH QUANTITY = 1
      var addedProducts = [...state.addedProducts, { product: action.product, quantity: action.quantity }];
      var total = updateTotal(addedProducts);
      return {
        ...state,
        addedProducts: addedProducts,
        total: total
      };
    case ActionTypes.INCREASE_QUANTITY:
      var found = [...state.addedProducts].find(item => item.product.id === action.product.id);
      // found.quantity++;
      var addQuantity = found.quantity + action.quantity;
      found.quantity = addQuantity;
      var total = updateTotal([...state.addedProducts]);
      return {
        ...state,
        addedProducts: [...state.addedProducts],
        total: total
      };
    case ActionTypes.DECREASE_QUANTITY:
      var found = [...state.addedProducts].find(item => item.product.id === action.product.id);
      // found.quantity++;
      if (found.quantity > 1) {
        var addQuantity = found.quantity - action.quantity;
        found.quantity = addQuantity;
        var total = updateTotal([...state.addedProducts]);
        return {
          ...state,
          addedProducts: [...state.addedProducts],
          total: total
        };
      } else {
        // var addQuantity = found.quantity - action.quantity;
        found.quantity = 1;
        var total = updateTotal([...state.addedProducts]);
        return {
          ...state,
          addedProducts: [...state.addedProducts],
          total: total
        };
      }

    default:
      return state;
  }
};

export default shoppingCartReducer;
