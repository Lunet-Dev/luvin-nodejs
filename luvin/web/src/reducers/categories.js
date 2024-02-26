import * as TYPES from "../constants/categories";

const initialState = {
  categories: [],
  loading: false,
  fetched: false,
  errorMessage: undefined,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_CATEGORIES:
      return {
        ...state,
        loading: true,
        fetched: false,
        errorMessage: undefined,
      };

    case TYPES.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        fetched: true,
        categories: action.categories,
      };

    case TYPES.GET_CATEGORIES_ERROR:
      return {
        ...state,
        loading: false,
        fetched: true,
        errorMessage: action.errorMessage,
      };

    default:
      return state;
  }
};

export default userReducer;
