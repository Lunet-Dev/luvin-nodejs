import { put, takeLatest, all, call } from "redux-saga/effects";

import { GET_CATEGORIES } from "../constants/categories";

import {
  getCategoriesSuccess,
  getCategoriesError,
} from "../actions/categories";

import Request from "../utils/request";

export function* handleGetCategories(action) {
  const url = "/category/all";
  try {
    const response = yield call(Request, url);
    yield put(getCategoriesSuccess(response.data));
  } catch (error) {
    yield put(getCategoriesError(error.message));
  }
}

export default function* rootSaga() {
  yield all([yield takeLatest(GET_CATEGORIES, handleGetCategories)]);
}
