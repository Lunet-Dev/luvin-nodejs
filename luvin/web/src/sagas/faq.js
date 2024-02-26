import { put, takeLatest, all, call } from "redux-saga/effects";

import { GET_FAQ } from "../constants/faq";

import { getFaqSuccess, getFaqError } from "../actions/faq";

import Request from "../utils/request";

export function* handleGetFaq(action) {
  const url = `/post/${action.newSlug}`;
  try {
    const response = yield call(Request, url);
    yield put(getFaqSuccess(response.data));
  } catch (error) {
    yield put(getFaqError(error.message));
  }
}

export default function* rootSaga() {
  yield all([yield takeLatest(GET_FAQ, handleGetFaq)]);
}
