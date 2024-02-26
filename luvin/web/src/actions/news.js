import * as TYPES from "../constants/news";

export const getNews = (limit = 12, page = 1) => ({
  type: TYPES.GET_NEWS,
  limit,
  page,
});

export const getNewsSuccess = (total, news) => ({
  type: TYPES.GET_NEWS_SUCCESS,
  total,
  news,
});

export const getNewsError = (errorMessage) => ({
  type: TYPES.GET_NEWS_ERROR,
  errorMessage,
});

export const resetState = () => ({
  type: TYPES.RESET_STATE,
});
