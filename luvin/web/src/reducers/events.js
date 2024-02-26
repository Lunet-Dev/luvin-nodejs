import * as TYPES from "../constants/events";

const initialState = {
  upcomming: {
    events: [],
    loading: false,
    fetched: false,
    errorMessage: undefined,
  },
  occurred: {
    events: [],
    loading: false,
    fetched: false,
    errorMessage: undefined,
    total: 0,
    page: 1,
    limit: 12,
    month: "",
  },
};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_UPCOMMING_EVENTS:
      return {
        ...state,
        upcomming: {
          ...state.upcomming,
          loading: true,
          fetched: false,
          errorMessage: undefined,
        },
      };

    case TYPES.GET_UPCOMMING_EVENTS_SUCCESS:
      return {
        ...state,
        upcomming: {
          ...state.upcomming,
          events: action.events,
          loading: false,
          fetched: true,
        },
      };

    case TYPES.GET_UPCOMMING_EVENTS_ERROR:
      return {
        ...state,
        upcomming: {
          ...state.upcomming,
          loading: false,
          fetched: true,
          errorMessage: action.errorMessage,
        },
      };

    case TYPES.GET_OCCURRED_EVENTS:
      return {
        ...state,
        occurred: {
          ...state.occurred,
          page: action.page,
          loading: true,
          fetched: false,
          errorMessage: undefined,
        },
      };

    case TYPES.GET_OCCURRED_EVENTS_SUCCESS:
      return {
        ...state,
        occurred: {
          ...state.occurred,
          total: action.total,
          events: action.events,
          loading: false,
          fetched: true,
        },
      };

    case TYPES.GET_OCCURRED_EVENTS_ERROR:
      return {
        ...state,
        occurred: {
          ...state.occurred,
          page: state.page > 1 && state.page - 1,
          loading: false,
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

export default eventsReducer;
