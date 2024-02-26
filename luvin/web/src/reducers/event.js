import * as TYPES from "../constants/event";

const initialState = {
  event: {},
  loading: false,
  fetched: false,
  errorMessage: undefined,
  joinEvent: {
    loading: false,
    fetched: false,
    errorMessage: undefined,
    success: false,
  },
};

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_EVENT:
      return {
        ...state,
        loading: true,
        fetched: false,
        errorMessage: undefined,
      };

    case TYPES.GET_EVENT_SUCCESS:
      return {
        ...state,
        event: action.event,
        loading: false,
        fetched: true,
      };

    case TYPES.GET_EVENT_ERROR:
      return {
        ...state,
        loading: false,
        fetched: true,
        errorMessage: action.errorMessage,
      };

    case TYPES.JOIN_EVENT:
      return {
        ...state,
        joinEvent: {
          ...state.joinEvent,
          success: false,
          loading: true,
          fetched: false,
          errorMessage: undefined,
        },
      };

    case TYPES.JOIN_EVENT_SUCCESS:
      return {
        ...state,
        joinEvent: {
          ...state.joinEvent,
          success: true,
          loading: false,
          fetched: true,
        },
      };

    case TYPES.JOIN_EVENT_ERROR:
      return {
        ...state,
        joinEvent: {
          ...state.joinEvent,
          loading: false,
          fetched: true,
          errorMessage: action.errorMessage,
          success: false,
        },
      };

    case TYPES.RESET_STATE:
      return initialState;

    default:
      return state;
  }
};

export default eventReducer;
