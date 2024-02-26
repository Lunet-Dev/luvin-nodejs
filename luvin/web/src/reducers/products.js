import * as TYPES from "../constants/products";

const initialState = {
  products: [],
  total: 0,
  page: 1,
  limit: 12,
  sort: "",
  type: "",
  origin: "",
  loading: false,
  fetched: false,
  errorMessage: undefined,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_PRODUCTS:
      return {
        ...state,
        page: action.page,
        sort: action.sort,
        type: action.productType,
        origin: action.origin,
        loading: true,
        fetched: false,
        errorMessage: undefined,
      };

    case TYPES.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        fetched: true,
        products: action.products,
        total: action.total,
      };

    case TYPES.GET_PRODUCTS_ERROR:
      return {
        ...state,
        page: state.page > 1 && state.page - 1,
        loading: false,
        fetched: true,
        errorMessage: action.errorMessage,
      };

    case TYPES.CHANGE_FILTER:
      return {
        ...state,
        [action.prop]: action.value,
      };

    case TYPES.RESET_STATE:
      return initialState;

    default:
      return state;
  }
};

export default productsReducer;
