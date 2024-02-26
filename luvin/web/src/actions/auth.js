import * as TYPES from "../constants/auth";

export const getUserInfo = (accessToken) => ({
  type: TYPES.GET_USER_INFO,
  accessToken,
});

export const getUserInfoSuccess = (userInfo) => ({
  type: TYPES.GET_USER_INFO_SUCCESS,
  userInfo,
});

export const changeLoginInfo = (prop, value) => ({
  type: TYPES.CHANGE_LOGIN_INFO,
  prop,
  value,
});

export const changeRegisterInfo = (prop, value) => ({
  type: TYPES.CHANGE_REGISTER_INFO,
  prop,
  value,
});

export const login = (phone, password) => ({
  type: TYPES.LOGIN,
  phone,
  password,
});

export const loginSuccess = (userInfo) => ({
  type: TYPES.LOGIN_SUCCESS,
  userInfo,
});

export const loginError = (errorMessage) => ({
  type: TYPES.LOGIN_ERROR,
  errorMessage,
});

export const register = (registerInfo) => ({
  type: TYPES.REGISTER,
  registerInfo,
});

export const registerSuccess = (userInfo) => ({
  type: TYPES.REGISTER_SUCCESS,
  userInfo,
});

export const registerError = (errorMessage) => ({
  type: TYPES.REGISTER_ERROR,
  errorMessage,
});

export const logout = () => ({
  type: TYPES.LOGOUT,
});

export const updateUserInfo = (userId, userInfo) => ({
  type: TYPES.UPDATE_USER_INFO,
  userId,
  userInfo,
});

export const updateUserInfoSuccess = (userInfo) => ({
  type: TYPES.UPDATE_USER_INFO_SUCCESS,
  userInfo,
});

export const updateUserInfoError = (errorMessage) => ({
  type: TYPES.UPDATE_USER_INFO_ERROR,
  errorMessage,
});

export const updatePassword = (passwordData) => ({
  type: TYPES.UPDATE_PASSWORD,
  passwordData,
});

export const updatePasswordSuccess = () => ({
  type: TYPES.UPDATE_PASSWORD_SUCCESS,
});

export const updatePasswordError = (errorMessage) => ({
  type: TYPES.UPDATE_PASSWORD_ERROR,
  errorMessage,
});
