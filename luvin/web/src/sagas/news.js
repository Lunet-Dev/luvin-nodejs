import { put, takeLatest, all, call } from "redux-saga/effects";

import { GET_NEWS } from "../constants/news";

import { getNewsSuccess, getNewsError } from "../actions/news";

import Request from "../utils/request";

export function* handleGetNews(action) {
  const url = `/post?limit=${action.limit}&page=${action.page}&type=article`;
  try {
    const response = yield call(Request, url);
    yield put(getNewsSuccess(response.data.total, response.data.posts));
  } catch (error) {
    yield put(getNewsError(error.message));
  }
}

export default function* rootSaga() {
  yield all([yield takeLatest(GET_NEWS, handleGetNews)]);
}
