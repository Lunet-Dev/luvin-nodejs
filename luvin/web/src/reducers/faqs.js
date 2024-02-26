import * as TYPES from "../constants/faqs";

const initialState = {
  faqs: [],
  total: 0,
  page: 1,
  limit: 12,
  loading: false,
  fetched: false,
  errorMessage: undefined,
};

const faqsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_FAQS:
      return {
        ...state,
        page: action.page,
        loading: true,
        fetched: false,
        errorMessage: undefined,
      };

    case TYPES.GET_FAQS_SUCCESS:
      return {
        ...state,
        loading: false,
        fetched: true,
        faqs: action.faqs,
        total: action.total,
      };

    case TYPES.GET_FAQS_ERROR:
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

export default faqsReducer;
