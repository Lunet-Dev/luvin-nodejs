import { put, takeLatest, all, call } from "redux-saga/effects";

import { GET_PRODUCTS_SALE } from "../constants/sales";

import { getProductsSaleSuccess, getProductsSaleError } from "../actions/sales";

import Request from "../utils/request";

export function* handleGetProductsSale(action) {
  const url = `/product/sale?limit=${action.limit}&page=${action.page}`;
  try {
    const response = yield call(Request, url);
    yield put(
      getProductsSaleSuccess(response.data.total, response.data.products)
    );
  } catch (error) {
    yield put(getProductsSaleError(error.message));
  }
}

export default function* rootSaga() {
  yield all([yield takeLatest(GET_PRODUCTS_SALE, handleGetProductsSale)]);
}
