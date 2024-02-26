import * as TYPES from "../constants/page";

const initialState = {
  loading: false,
  fetched: false,
  errorMessage: undefined,
  pageContent: "",
};

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_PAGE:
      return {
        ...state,
        loading: true,
        fetched: false,
        errorMessage: undefined,
      };

    case TYPES.GET_PAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        fetched: true,
        pageContent: action.pageContent,
      };

    case TYPES.GET_PAGE_ERROR:
      return {
        ...state,
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

export default pageReducer;
