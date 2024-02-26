import * as TYPES from "../constants/search";

const initialState = {
  products: [],
  total: 0,
  page: 1,
  limit: 12,
  loading: false,
  fetched: false,
  errorMessage: undefined,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SEARCH:
      return {
        ...state,
        page: action.page,
        loading: true,
        fetched: false,
        errorMessage: undefined,
      };

    case TYPES.SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        fetched: true,
        products: action.products,
        total: action.total,
      };

    case TYPES.SEARCH_ERROR:
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

export default searchReducer;
