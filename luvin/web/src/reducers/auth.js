import * as TYPES from "../constants/auth";

const initialState = {
  userInfo: {},
  login: {
    phone: "",
    password: "",
    loading: false,
    fetched: false,
    errorMessage: undefined,
  },
  register: {
    phone: "",
    password: "",
    loading: false,
    fetched: false,
    errorMessage: undefined,
  },
  updateUserInfo: {
    loading: false,
    fetched: false,
    errorMessage: undefined,
    success: false,
  },
  updatePassword: {
    loading: false,
    fetched: false,
    success: false,
    errorMessage: undefined,
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_USER_INFO_SUCCESS:
      return {
        ...state,
        userInfo: action.userInfo,
      };

    case TYPES.CHANGE_LOGIN_INFO:
      return {
        ...state,
        login: {
          ...state.login,
          [action.prop]: action.value,
        },
      };

    case TYPES.CHANGE_REGISTER_INFO:
      return {
        ...state,
        register: {
          ...state.login,
          [action.prop]: action.value,
        },
      };

    case TYPES.LOGIN:
      return {
        ...state,
        login: {
          ...state.login,
          loading: true,
          fetched: false,
          errorMessage: undefined,
        },
      };

    case TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          ...state.login,
          loading: false,
          fetched: true,
          errorMessage: undefined,
        },
        userInfo: action.userInfo,
      };

    case TYPES.LOGIN_ERROR:
      return {
        ...state,
        login: {
          ...state.login,
          loading: false,
          fetched: true,
          errorMessage: action.errorMessage,
        },
      };

    case TYPES.REGISTER:
      return {
        ...state,
        register: {
          ...state.register,
          loading: true,
          fetched: false,
          errorMessage: undefined,
        },
      };

    case TYPES.REGISTER_SUCCESS:
      return {
        ...state,
        register: {
          ...state.register,
          loading: false,
          fetched: true,
          errorMessage: undefined,
        },
        userInfo: action.userInfo,
      };

    case TYPES.REGISTER_ERROR:
      return {
        ...state,
        register: {
          ...state.register,
          loading: false,
          fetched: true,
          errorMessage: action.errorMessage,
        },
      };

    case TYPES.LOGOUT:
      return {
        ...state,
        userInfo: {},
      };

    case TYPES.UPDATE_USER_INFO:
      return {
        ...state,
        updateUserInfo: {
          ...state,
          loading: true,
          fetched: false,
          errorMessage: undefined,
          success: false,
        },
      };

    case TYPES.UPDATE_USER_INFO_SUCCESS:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          ...action.userInfo,
        },
        updateUserInfo: {
          ...state.updateUserInfo,
          loading: false,
          fetched: true,
          success: true,
        },
      };

    case TYPES.UPDATE_USER_INFO_ERROR:
      return {
        ...state,
        updateUserInfo: {
          loading: false,
          fetched: true,
          errorMessage: action.errorMessage,
        },
      };

    case TYPES.UPDATE_PASSWORD:
      return {
        ...state,
        updatePassword: {
          ...state.updatePassword,
          loading: true,
          success: false,
          fetched: false,
          errorMessage: undefined,
        },
      };

    case TYPES.UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        updatePassword: {
          ...state.updatePassword,
          loading: false,
          fetched: true,
          success: true,
        },
      };

    case TYPES.UPDATE_PASSWORD_ERROR:
      return {
        ...state,
        updatePassword: {
          ...state.updatePassword,
          loading: false,
          fetched: true,
          success: false,
          errorMessage: action.errorMessage,
        },
      };

    default:
      return state;
  }
};

export default userReducer;
