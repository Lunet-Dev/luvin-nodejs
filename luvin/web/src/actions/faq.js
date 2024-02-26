import * as TYPES from "../constants/faq";

export const getFaq = (faqSlug) => ({
  type: TYPES.GET_FAQ,
  faqSlug,
});

export const getFaqSuccess = (post) => ({
  type: TYPES.GET_FAQ_SUCCESS,
  post,
});

export const getFaqError = (errorMessage) => ({
  type: TYPES.GET_FAQ_ERROR,
  errorMessage,
});

export const resetState = () => ({
  type: TYPES.RESET_STATE,
});
