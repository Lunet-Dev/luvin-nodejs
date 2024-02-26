import { put, takeLatest, all, call } from "redux-saga/effects";
import isString from "lodash/isString";

import {
  CREATE_ORDER,
  GET_ORDER_HISTORY,
  GET_ORDER_DETAIL,
  REDEEM_VOUCHER,
} from "../constants/order";

import {
  createOrderSuccess,
  createOrderError,
  getOrderHistorySuccess,
  getOrderHistoryError,
  getOrderDetailSuccess,
  getOrderDetailError,
  redeemVoucherSuccess,
  redeemVoucherError,
} from "../actions/order";

import Request from "../utils/request";

export function* handleCreateOrder(action) {
  const url = "/order";
  try {
    const response = yield call(Request, url, {
      method: "POST",
      body: JSON.stringify(action.orderInfo),
    });
    if (isString(response.data)) {
      window.location.replace(response.data);
      return;
    }
    window.location.href = `/tai-khoan/view-order/${response.data._id}`;
    yield put(createOrderSuccess(response.data));
  } catch (error) {
    yield put(createOrderError(error.message));
  }
}

export function* handleGetOrdersHistory(action) {
  const url = "/order/history?limit=100&page=1";
  try {
    const response = yield call(Request, url);
    yield put(getOrderHistorySuccess(response.data));
  } catch (error) {
    yield put(getOrderHistoryError(error.message));
  }
}

export function* handleGetOrderDetail(action) {
  const url = `/order/${action.orderId}`;
  try {
    const response = yield call(Request, url);
    yield put(getOrderDetailSuccess(response.data));
  } catch (error) {
    yield put(getOrderDetailError(error.message));
  }
}

export function* handleRedeemVoucher(action) {
  const url = `/voucher/redeem`;
  try {
    const response = yield call(Request, url, {
      method: "POST",
      body: JSON.stringify({ code: action.code }),
    });
    yield put(redeemVoucherSuccess(response.data));
  } catch (error) {
    yield put(redeemVoucherError(error.message));
  }
}

export default function* rootSaga() {
  yield all([
    yield takeLatest(CREATE_ORDER, handleCreateOrder),
    yield takeLatest(GET_ORDER_HISTORY, handleGetOrdersHistory),
    yield takeLatest(GET_ORDER_DETAIL, handleGetOrderDetail),
    yield takeLatest(REDEEM_VOUCHER, handleRedeemVoucher),
  ]);
}
