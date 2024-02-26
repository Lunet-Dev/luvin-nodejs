import * as TYPES from "../constants/search";

export const search = (name, limit = 12, page = 1) => ({
  type: TYPES.SEARCH,
  name,
  limit,
  page,
});

export const searchSuccess = (total, products) => ({
  type: TYPES.SEARCH_SUCCESS,
  total,
  products,
});

export const searchError = (errorMessage) => ({
  type: TYPES.SEARCH_ERROR,
  errorMessage,
});

export const resetState = () => ({
  type: TYPES.RESET_STATE,
});
