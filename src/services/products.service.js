import axios from "axios";
import { handleResponse,handleError } from './apiUtils'

const BASE_URL = 'http://localhost:4000/products';

export function getAllProducts(queryString){
    console.log("basdddddddad",BASE_URL + queryString)
    return fetch(BASE_URL + queryString)
    .then(handleResponse)
    .catch(handleError);
}

export function getProduct(productId){
    console.log("api",productId)
    return fetch(`${BASE_URL}/${productId}`)
    .then(handleResponse)
    .catch(handleError);    
}




