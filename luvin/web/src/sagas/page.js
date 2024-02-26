import { put, takeLatest, all, call } from "redux-saga/effects";

import { GET_PAGE } from "../constants/page";

import { getPageSuccess, getPageError } from "../actions/page";

import Request from "../utils/request";

export function* handleGetPage(action) {
  const url = `/page/${action.pageType}`;
  try {
    const response = yield call(Request, url);
    yield put(getPageSuccess((response.data || {}).content || ""));
  } catch (error) {
    yield put(getPageError(error.message));
  }
}

export default function* rootSaga() {
  yield all([yield takeLatest(GET_PAGE, handleGetPage)]);
}
