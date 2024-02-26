import { put, takeLatest, all, call } from "redux-saga/effects";

import { GET_NEW } from "../constants/new";

import { getNewSuccess, getNewError } from "../actions/new";

import Request from "../utils/request";

export function* handleGetNew(action) {
  const url = `/post/${action.newSlug}`;
  try {
    const response = yield call(Request, url);
    yield put(getNewSuccess(response.data));
  } catch (error) {
    yield put(getNewError(error.message));
  }
}

export default function* rootSaga() {
  yield all([yield takeLatest(GET_NEW, handleGetNew)]);
}
