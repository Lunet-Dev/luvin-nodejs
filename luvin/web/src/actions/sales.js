import * as TYPES from "../constants/sales";

export const getProductsSale = (limit = 12, page = 1) => ({
  type: TYPES.GET_PRODUCTS_SALE,
  limit,
  page,
});

export const getProductsSaleSuccess = (total, products) => ({
  type: TYPES.GET_PRODUCTS_SALE_SUCCESS,
  total,
  products,
});

export const getProductsSaleError = (errorMessage) => ({
  type: TYPES.GET_PRODUCTS_SALE_ERROR,
  errorMessage,
});

export const resetState = () => ({
  type: TYPES.RESET_STATE,
});
