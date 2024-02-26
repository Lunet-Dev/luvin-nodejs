import * as TYPES from "../constants/faq";

const initialState = {
  loading: false,
  fetched: false,
  errorMessage: undefined,
  post: {},
};

const faqReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_FAQ:
      return {
        ...state,
        loading: true,
        fetched: false,
        errorMessage: undefined,
      };

    case TYPES.GET_FAQ_SUCCESS:
      return {
        ...state,
        loading: false,
        fetched: true,
        post: action.post,
      };

    case TYPES.GET_FAQ_ERROR:
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

export default faqReducer;
