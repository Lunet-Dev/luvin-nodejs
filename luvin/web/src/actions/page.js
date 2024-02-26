import * as TYPES from "../constants/page";

export const getPage = (pageType) => ({
  type: TYPES.GET_PAGE,
  pageType,
});

export const getPageSuccess = (pageContent) => ({
  type: TYPES.GET_PAGE_SUCCESS,
  pageContent,
});

export const getPageError = (errorMessage) => ({
  type: TYPES.GET_PAGE_ERROR,
  errorMessage,
});

export const resetState = () => ({
  type: TYPES.RESET_STATE,
});
