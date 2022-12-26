import { ActionTypes } from "../ActionTypes/actionTypes";

const initialState = {
  allProducts: [],
  cartItems: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.PRODUCT_FETCH:
      return {
        ...state,
        allProducts: [...action.payload],
      };
    case ActionTypes.PRODUCT_ADD:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case ActionTypes.PRODUCT_REMOVE:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default productReducer;