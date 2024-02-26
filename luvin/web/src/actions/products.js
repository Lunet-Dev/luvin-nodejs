import * as TYPES from "../constants/products";

export const getProducts = (
  categorySlug,
  limit = 12,
  page = 1,
  sort = "",
  productType = "",
  origin = ""
) => ({
  type: TYPES.GET_PRODUCTS,
  categorySlug,
  limit,
  page,
  sort,
  productType,
  origin,
});

export const getProductsSuccess = (total, products) => ({
  type: TYPES.GET_PRODUCTS_SUCCESS,
  total,
  products,
});

export const getProductsError = (errorMessage) => ({
  type: TYPES.GET_PRODUCTS_ERROR,
  errorMessage,
});

export const changeFilter = (prop, value) => ({
  type: TYPES.CHANGE_FILTER,
  prop,
  value,
});

export const resetState = () => ({
  type: TYPES.RESET_STATE,
});
