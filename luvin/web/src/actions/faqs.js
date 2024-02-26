import * as TYPES from "../constants/faqs";

export const getFaqs = (limit = 12, page = 1) => ({
  type: TYPES.GET_FAQS,
  limit,
  page,
});

export const getFaqsSuccess = (total, faqs) => ({
  type: TYPES.GET_FAQS_SUCCESS,
  total,
  faqs,
});

export const getFaqsError = (errorMessage) => ({
  type: TYPES.GET_FAQS_ERROR,
  errorMessage,
});

export const resetState = () => ({
  type: TYPES.RESET_STATE,
});
