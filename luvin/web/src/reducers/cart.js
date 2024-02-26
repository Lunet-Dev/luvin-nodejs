import * as TYPES from "../constants/cart";

const initialState = {
  openCartMenu: false,
  products: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.OPEN_CART_MENU:
      return {
        ...state,
        openCartMenu: true,
      };
    case TYPES.TOGGLE_CART_MENU:
      return {
        ...state,
        openCartMenu: !state.openCartMenu,
      };

    case TYPES.ADD_PRODUCT:
      return {
        ...state,
        products: [
          ...state.products,
          {
            amount: action.amount,
            product: action.product,
          },
        ],
      };

    case TYPES.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((a, index) => index !== action.index),
      };

    default:
      return state;
  }
};

export default userReducer;
