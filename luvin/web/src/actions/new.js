import * as TYPES from "../constants/new";

export const getNew = (newSlug) => ({
  type: TYPES.GET_NEW,
  newSlug,
});

export const getNewSuccess = (post) => ({
  type: TYPES.GET_NEW_SUCCESS,
  post,
});

export const getNewError = (errorMessage) => ({
  type: TYPES.GET_NEW_ERROR,
  errorMessage,
});

export const resetState = () => ({
  type: TYPES.RESET_STATE,
});
