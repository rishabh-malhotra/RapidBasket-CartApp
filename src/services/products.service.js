import { handleResponse,handleError } from './apiUtils'

const BASE_URL = 'http://localhost:4000/products';

export function getAllProducts(queryString){
    return fetch(BASE_URL + queryString)
    .then(handleResponse)
    .catch(handleError);
}

export function getProduct(productId){
    return fetch(`${BASE_URL}/${productId}`)
    .then(handleResponse)
    .catch(handleError);    
}




