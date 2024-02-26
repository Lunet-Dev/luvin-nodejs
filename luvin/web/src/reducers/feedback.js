import * as TYPES from "../constants/feedback";

const initialState = {
  feedbacks: [],
  loading: false,
  fetched: false,
  errorMessage: undefined,
  sendFeedback: {
    loading: false,
    fetched: false,
    errorMessage: undefined,
    success: false,
  },
};

const faqsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_FEEDBACK:
      return {
        ...state,
        loading: true,
        fetched: false,
        errorMessage: undefined,
      };

    case TYPES.GET_FEEDBACK_SUCCESS:
      return {
        ...state,
        loading: false,
        fetched: true,
        feedbacks: action.feedbacks,
      };

    case TYPES.GET_FEEDBACK_ERROR:
      return {
        ...state,
        loading: false,
        fetched: true,
        errorMessage: action.errorMessage,
      };

    case TYPES.SEND_FEEDBACK:
      return {
        ...state,
        sendFeedback: {
          ...state.sendFeedback,
          loading: true,
          fetched: false,
          errorMessage: undefined,
          success: false,
        },
      };

    case TYPES.SEND_FEEDBACK_SUCCESS:
      return {
        ...state,
        sendFeedback: {
          ...state.sendFeedback,
          loading: false,
          fetched: true,
          success: true,
        },
      };

    case TYPES.SEND_FEEDBACK_ERROR:
      return {
        ...state,
        sendFeedback: {
          ...state.sendFeedback,
          loading: false,
          success: false,
          fetched: true,
          errorMessage: action.errorMessage,
        },
      };

    case TYPES.RESET_STATE:
      return initialState;

    default:
      return state;
  }
};

export default faqsReducer;
