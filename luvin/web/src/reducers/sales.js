import * as TYPES from "../constants/sales";

const initialState = {
  products: [],
  total: 0,
  page: 1,
  limit: 12,
  loading: false,
  fetched: false,
  errorMessage: undefined,
};

const salesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_PRODUCTS_SALE:
      return {
        ...state,
        page: action.page,
        loading: true,
        fetched: false,
        errorMessage: undefined,
      };

    case TYPES.GET_PRODUCTS_SALE_SUCCESS:
      return {
        ...state,
        loading: false,
        fetched: true,
        products: action.products,
        total: action.total,
      };

    case TYPES.GET_PRODUCTS_SALE_ERROR:
      return {
        ...state,
        page: state.page > 1 && state.page - 1,
        loading: false,
        fetched: true,
        errorMessage: action.errorMessage,
      };

    case TYPES.RESET_STATE:
      return initialState;

    default:
      return state;
  }
};

export default salesReducer;
