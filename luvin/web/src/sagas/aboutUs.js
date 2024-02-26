import { put, takeLatest, all, call } from "redux-saga/effects";

import { GET_CONFIGS } from "../constants/aboutUs";

import { getConfigsSuccess, getConfigsError } from "../actions/aboutUs";

import Request from "../utils/request";

export function* handleGetConfigs(action) {
  const url = "/about-us";
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
