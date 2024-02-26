import * as TYPES from "../constants/tasty";

export const getConfigs = () => ({
  type: TYPES.GET_CONFIGS,
});

export const getConfigsSuccess = (configs) => ({
  type: TYPES.GET_CONFIGS_SUCCESS,
  configs,
});

export const getConfigsError = (errorMessage) => ({
  type: TYPES.GET_CONFIGS_ERROR,
  errorMessage,
});
