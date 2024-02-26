import { put, takeLatest, all, call } from "redux-saga/effects";

import { SEARCH } from "../constants/search";

import { searchSuccess, searchError } from "../actions/search";

import Request from "../utils/request";

export function* handleSearch(action) {
  const url = `/product?limit=${action.limit}&page=${action.page}&name=${action.name}`;
  try {
    const response = yield call(Request, url);
    yield put(searchSuccess(response.data.total, response.data.products));
  } catch (error) {
    yield put(searchError(error.message));
  }
}

export default function* rootSaga() {
  yield all([yield takeLatest(SEARCH, handleSearch)]);
}
