import * as TYPES from "../constants/forgotPassword";

const initialState = {
  forgotPassword: {
    loading: false,
    fetched: false,
    success: false,
    errorMessage: undefined,
  },
  forgotPasswordConfirmation: {
    loading: false,
    fetched: false,
    success: false,
    errorMessage: undefined,
  },
};

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.FORGOT_PASSWORD:
      return {
        ...state,
        forgotPassword: {
          ...state.forgotPassword,
          loading: true,
          success: false,
          fetched: false,
          errorMessage: undefined,
        },
      };

    case TYPES.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        forgotPassword: {
          ...state.forgotPassword,
          loading: false,
          success: true,
          fetched: true,
        },
      };

    case TYPES.FORGOT_PASSWORD_ERROR:
      return {
        ...state,
        forgotPassword: {
          ...state.forgotPassword,
          loading: false,
          success: false,
          fetched: true,
          errorMessage: action.errorMessage,
        },
      };

    case TYPES.FORGOT_PASSWORD_CONFIRMATION:
      return {
        ...state,
        forgotPasswordConfirmation: {
          ...state.forgotPasswordConfirmation,
          success: false,
          loading: true,
          fetched: false,
          errorMessage: undefined,
        },
      };

    case TYPES.FORGOT_PASSWORD_CONFIRMATION_SUCCESS:
      return {
        ...state,
        forgotPasswordConfirmation: {
          ...state.forgotPasswordConfirmation,
          success: true,
          loading: false,
          fetched: true,
        },
      };

    case TYPES.FORGOT_PASSWORD_ERROR:
      return {
        ...state,
        forgotPasswordConfirmation: {
          ...state.forgotPasswordConfirmation,
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
