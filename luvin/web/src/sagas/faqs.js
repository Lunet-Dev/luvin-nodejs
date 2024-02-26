import { put, takeLatest, all, call } from "redux-saga/effects";

import { GET_FAQS } from "../constants/faqs";

import { getFaqsSuccess, getFaqsError } from "../actions/faqs";

import Request from "../utils/request";

export function* handleGetFaqs(action) {
  const url = `/post?limit=${action.limit}&page=${action.page}&type=faq`;
  try {
    const response = yield call(Request, url);
    yield put(getFaqsSuccess(response.data.total, response.data.posts));
  } catch (error) {
    yield put(getFaqsError(error.message));
  }
}

export default function* rootSaga() {
  yield all([yield takeLatest(GET_FAQS, handleGetFaqs)]);
}
