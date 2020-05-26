import * as types from "./actionTypes";
import * as productService from "../../services/products.service";

//naming mobiles as products in all places as a cart application could be used for anything

export function getAllProductsSuccess(products) {
  return {
    type: types.GET_PRODUCTS_SUCCESS,
    products,
  };
}

export function getAllProductsRequest() {
  return {
    type: types.GET_PRODUCTS_REQUEST,
  };
}

export function getAllProductsError(error) {
  return {
    type: types.GET_PRODUCTS_ERROR,
    error,
  };
}

export function getProductSuccess(product) {

  return {
    type: types.GET_PRODUCT_SUCCESS,
    product,
  };
}

export function getProductRequest() {
  return {
    type: types.GET_PRODUCT_REQUEST,
  };
}

export function getProductError(error) {
  return {
    type: types.GET_PRODUCT_ERROR,
    error,
  };
}

export function getProducts(args) {
   
  return function (dispatch) {
    dispatch(getAllProductsRequest());
    let searchText = args && args.searchText;
    let sortingtOrder = args && args.sorting;
    let queryParameters = [];
    if (searchText && searchText.trim() !== "") {
      queryParameters.push({ key: "q", value: searchText });
    }
    if(sortingtOrder===0 || sortingtOrder===1){
       
        queryParameters.push({key : '_sort', value:'price'});
        let order = sortingtOrder === 0 ? 'asc' : 'desc';
        queryParameters.push({key : '_order', value:order});
      }

    let queryString = "";
    if (queryParameters.length > 0) queryString = "?";

    for (let queryParameter of queryParameters) {
      if (queryString !== "?") {
        queryString = queryString + "&";
      }
      queryString = queryString + queryParameter.key + "=" + queryParameter.value;
    }

    return productService
      .getAllProducts(queryString)
      .then((products) => {
       
        dispatch(getAllProductsSuccess(products));
      })
      .catch((error) => {
        dispatch(getAllProductsError(error));
        throw error;
      });
  };
}

export function getProduct(productId) {
  return function (dispatch) {
    dispatch(getProductRequest());
    return productService
      .getProduct(productId)
      .then((product) => {
       
        dispatch(getProductSuccess(product));
      })
      .catch((error) => {
        dispatch(getProductError(error));
        throw error;
      });
  };
}


export function updateSearch(searchText){
    return function (dispatch){
        dispatch({
            type:types.UPDATE_SEARCH,
            searchText
        })
    }
}

export const updateSort = orderCode => {

    return function(dispatch) {
      dispatch({
        type : types.UPDATE_SORT,
        orderCode
      });   
  
  }
  }
