import * as TYPES from "../constants/news";

const initialState = {
  news: [],
  total: 0,
  page: 1,
  limit: 12,
  loading: false,
  fetched: false,
  errorMessage: undefined,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_NEWS:
      return {
        ...state,
        page: action.page,
        loading: true,
        fetched: false,
        errorMessage: undefined,
      };

    case TYPES.GET_NEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        fetched: true,
        news: action.news,
        total: action.total,
      };

    case TYPES.GET_NEWS_ERROR:
      return {
        ...state,
        page: state.page > 1 && state.page - 1,
        loading: false,
        fetched: true,
        errorMessage: action.errorMessage,
      };

    case TYPES.RESET_STATE:
      return initialState;

    default:
      return state;
  }
};

export default newsReducer;
