import * as TYPES from "../constants/forgotPassword";

export const forgotPassword = (username) => ({
  type: TYPES.FORGOT_PASSWORD,
  username,
});

export const forgotPasswordSuccess = () => ({
  type: TYPES.FORGOT_PASSWORD_SUCCESS,
});

export const forgotPasswordError = (errorMessage) => ({
  type: TYPES.FORGOT_PASSWORD_ERROR,
  errorMessage,
});

export const forgotPasswordConfirmation = (token, password) => ({
  type: TYPES.FORGOT_PASSWORD_CONFIRMATION,
  token,
  password,
});

export const forgotPasswordConfirmationSuccess = () => ({
  type: TYPES.FORGOT_PASSWORD_CONFIRMATION_SUCCESS,
});

export const forgotPasswordConfirmationError = (errorMessage) => ({
  type: TYPES.FORGOT_PASSWORD_CONFIRMATION_ERROR,
  errorMessage,
});

export const resetState = () => ({
  type: TYPES.RESET_STATE,
});
