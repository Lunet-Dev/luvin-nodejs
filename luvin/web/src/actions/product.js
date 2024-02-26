import * as TYPES from "../constants/product";

export const getProduct = (productSlug) => ({
  type: TYPES.GET_PRODUCT,
  productSlug,
});

export const getProductSuccess = (product) => ({
  type: TYPES.GET_PRODUCT_SUCCESS,
  product,
});

export const getProductError = (errorMessage) => ({
  type: TYPES.GET_PRODUCT_ERROR,
  errorMessage,
});

export const resetState = () => ({
  type: TYPES.RESET_STATE,
});
