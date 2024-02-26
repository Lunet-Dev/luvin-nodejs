import { put, takeLatest, all, call } from "redux-saga/effects";

import { GET_CONFIGS } from "../constants/tasty";

import { getConfigsSuccess, getConfigsError } from "../actions/tasty";

import Request from "../utils/request";

export function* handleGetConfigs(action) {
  const url = "/tasty";
  try {
    const response = yield call(Request, url);
    yield put(getConfigsSuccess(response.data));
  } catch (error) {
    yield put(getConfigsError(error.message));
  }
}

export default function* rootSaga() {
  yield all([yield takeLatest(GET_CONFIGS, handleGetConfigs)]);
}
