import * as TYPES from "../constants/aboutUs";

const initialState = {
  configs: {},
  loading: false,
  fetched: false,
  errorMessage: undefined,
};

const tastyReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_CONFIGS:
      return {
        ...state,
        loading: true,
        fetched: false,
        errorMessage: undefined,
      };

    case TYPES.GET_CONFIGS_SUCCESS:
      return {
        ...state,
        loading: false,
        fetched: true,
        configs: action.configs,
      };

    case TYPES.GET_CONFIGS_ERROR:
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

export default tastyReducer;
