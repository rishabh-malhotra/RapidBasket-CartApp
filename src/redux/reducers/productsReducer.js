import * as types from "../actions/actionTypes";

const initalState = {
  products: [],
  totalProducts: 0,
  isProductsLoading: false,
};

export const productsReducer = (state = initalState, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS_SUCCESS:
      return Object.assign(
        {},
        ...[state],
        { products: action.products },
        { totalProducts: action.products.length },
        { isProductsLoading: false }
      );
    case types.GET_PRODUCTS_REQUEST:
      return Object.assign({}, ...[state], { isProductsLoading: true });
    case types.GET_PRODUCTS_ERROR:
      return Object.assign(
        {},
        ...[state],
        { error: action.error },
        { isProductsLoading: false }
      );
    default:
      return state;
  }
};
