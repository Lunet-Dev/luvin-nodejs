import { put, takeLatest, all, call } from "redux-saga/effects";

import { GET_PRODUCTS } from "../constants/products";

import { getProductsSuccess, getProductsError } from "../actions/products";

import Request from "../utils/request";

export function* handleGetProducts(action) {
  const url = `/product/category/${action.categorySlug}?limit=${action.limit}&page=${action.page}&sort=${action.sort}&type=${action.productType}&origin=${action.origin}`;
  try {
    const response = yield call(Request, url);
    yield put(getProductsSuccess(response.data.total, response.data.products));
  } catch (error) {
    yield put(getProductsError(error.message));
  }
}

export default function* rootSaga() {
  yield all([yield takeLatest(GET_PRODUCTS, handleGetProducts)]);
}
