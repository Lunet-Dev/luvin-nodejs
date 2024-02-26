import * as TYPES from "../constants/product";

const initialState = {
  product: {},
  loading: false,
  fetched: false,
  errorMessage: undefined,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_PRODUCT:
      return {
        ...state,
        loading: true,
        fetched: false,
        errorMessage: undefined,
      };

    case TYPES.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        fetched: true,
        product: action.product,
      };

    case TYPES.GET_PRODUCT_ERROR:
      return {
        ...state,
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

export default productReducer;
