import * as TYPES from "../constants/categories";

export const getCategories = () => ({
  type: TYPES.GET_CATEGORIES,
});

export const getCategoriesSuccess = (categories) => ({
  type: TYPES.GET_CATEGORIES_SUCCESS,
  categories,
});

export const getCategoriesError = (errorMessage) => ({
  type: TYPES.GET_CATEGORIES_ERROR,
  errorMessage,
});
