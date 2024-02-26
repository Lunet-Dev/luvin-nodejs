import * as TYPES from "../constants/cart";

export const toggleCartMenu = () => ({
  type: TYPES.TOGGLE_CART_MENU,
});

export const openCartMenu = () => ({
  type: TYPES.OPEN_CART_MENU,
});

export const addProduct = (amount, product) => ({
  type: TYPES.ADD_PRODUCT,
  amount,
  product,
});

export const removeProduct = (index) => ({
  type: TYPES.REMOVE_PRODUCT,
  index,
});
