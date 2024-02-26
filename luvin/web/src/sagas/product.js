import { put, takeLatest, all, call } from "redux-saga/effects";

import { GET_PRODUCT } from "../constants/product";

import { getProductSuccess, getProductError } from "../actions/product";

import Request from "../utils/request";

export function* handleGetProduct(action) {
  const url = `/product/${action.productSlug}`;
  try {
    const response = yield call(Request, url);
    yield put(getProductSuccess(response.data));
  } catch (error) {
    yield put(getProductError(error.message));
  }
}

export default function* rootSaga() {
  yield all([yield takeLatest(GET_PRODUCT, handleGetProduct)]);
}
