import products from "../data";
import { ADD_TO_CART, CLEAR_CART } from "./actions";

const initialState = {
  products: products,
  cart: [], 
};

const rootReducer = (state = initialState, action) => {
  if (action.type === ADD_TO_CART) {
    console.log("/cart Reducer received action:", action)
  }
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
     case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

export default rootReducer;