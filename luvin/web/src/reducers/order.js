import * as TYPES from "../constants/order";

const initialState = {
  loading: false,
  fetched: false,
  errorMessage: undefined,
  success: false,
  history: {
    orders: [],
    loading: false,
    fetched: false,
    errorMessage: undefined,
  },
  detail: {
    order: {},
    loading: false,
    fetched: false,
    errorMessage: undefined,
  },
  redeemVoucher: {
    voucherData: {},
    loading: false,
    fetched: false,
    errorMessage: undefined,
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.CREATE_ORDER:
      return {
        ...state,
        loading: true,
        fetched: false,
        errorMessage: undefined,
        success: false,
      };

    case TYPES.CREATE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        fetched: true,
        success: true,
      };

    case TYPES.CREATE_ORDER_ERROR:
      return {
        ...state,
        loading: false,
        fetched: true,
        errorMessage: action.errorMessage,
        success: false,
      };

    case TYPES.GET_ORDER_HISTORY:
      return {
        ...state,
        history: {
          ...state.history,
          loading: true,
          fetched: false,
          errorMessage: undefined,
        },
      };

    case TYPES.GET_ORDER_HISTORY_SUCCESS:
      return {
        ...state,
        history: {
          ...state.history,
          loading: false,
          fetched: true,
          orders: action.orders,
        },
      };

    case TYPES.GET_ORDER_HISTORY_ERROR:
      return {
        ...state,
        history: {
          ...state.history,
          loading: false,
          fetched: true,
          errorMessage: action.errorMessage,
        },
      };

    case TYPES.GET_ORDER_DETAIL:
      return {
        ...state,
        detail: {
          ...state.detail,
          loading: true,
          fetched: false,
          errorMessage: undefined,
        },
      };

    case TYPES.GET_ORDER_DETAIL_SUCCESS:
      return {
        ...state,
        detail: {
          ...state.detail,
          loading: false,
          fetched: true,
          order: action.order,
        },
      };

    case TYPES.GET_ORDER_DETAIL_ERROR:
      return {
        ...state,
        detail: {
          ...state.detail,
          loading: false,
          fetched: true,
          errorMessage: action.errorMessage,
        },
      };

    case TYPES.REDEEM_VOUCHER:
      return {
        ...state,
        redeemVoucher: {
          ...state.redeemVoucher,
          loading: true,
          voucherData: {},
          fetched: false,
          errorMessage: undefined,
        },
      };

    case TYPES.REDEEM_VOUCHER_SUCCESS:
      return {
        ...state,
        redeemVoucher: {
          ...state.redeemVoucher,
          loading: false,
          fetched: true,
          voucherData: action.voucherData,
        },
      };

    case TYPES.REDEEM_VOUCHER_ERROR:
      return {
        ...state,
        redeemVoucher: {
          ...state.redeemVoucher,
          loading: false,
          fetched: true,
          errorMessage: action.errorMessage,
        },
      };

    default:
      return state;
  }
};

export default userReducer;
