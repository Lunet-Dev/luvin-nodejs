import * as TYPES from "../constants/order";

export const createOrder = (orderInfo) => ({
  type: TYPES.CREATE_ORDER,
  orderInfo,
});

export const createOrderSuccess = (order) => ({
  type: TYPES.CREATE_ORDER_SUCCESS,
  order,
});

export const createOrderError = (errorMessage) => ({
  type: TYPES.CREATE_ORDER_ERROR,
  errorMessage,
});

export const getOrderHistory = () => ({
  type: TYPES.GET_ORDER_HISTORY,
});

export const getOrderHistorySuccess = (orders) => ({
  type: TYPES.GET_ORDER_HISTORY_SUCCESS,
  orders,
});

export const getOrderHistoryError = (errorMessage) => ({
  type: TYPES.GET_ORDER_HISTORY_ERROR,
  errorMessage,
});

export const getOrderDetail = (orderId) => ({
  type: TYPES.GET_ORDER_DETAIL,
  orderId,
});

export const getOrderDetailSuccess = (order) => ({
  type: TYPES.GET_ORDER_DETAIL_SUCCESS,
  order,
});

export const getOrderDetailError = (errorMessage) => ({
  type: TYPES.GET_ORDER_DETAIL_ERROR,
  errorMessage,
});

export const redeemVoucher = (code) => ({
  type: TYPES.REDEEM_VOUCHER,
  code,
});

export const redeemVoucherSuccess = (voucherData) => ({
  type: TYPES.REDEEM_VOUCHER_SUCCESS,
  voucherData,
});

export const redeemVoucherError = (errorMessage) => ({
  type: TYPES.REDEEM_VOUCHER_ERROR,
  errorMessage,
});
