import { ActionTypes } from "../ActionTypes/actionTypes";

export const addToCart = (product) => {
  return {
    type: ActionTypes.PRODUCT_ADD,
    payload: product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: ActionTypes.PRODUCT_REMOVE,
    payload: product,
  };
};
export const fetchProducts = (product) => {
  return {
    type: ActionTypes.PRODUCT_FETCH,
    payload: product,
  };
};
