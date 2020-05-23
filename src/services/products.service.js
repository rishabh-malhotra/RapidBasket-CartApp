import axios from "axios";
import { handleResponse,handleError } from './apiUtils'

const BASE_URL = 'http://localhost:4000/products';

export function getAllProducts(){
    return fetch(BASE_URL)
    .then(handleResponse)
    .catch(handleError);
}

export function getProduct(productName){
    return axios.get(`${BASE_URL}/name=${productName}`)
    .then(handleResponse)
    .catch(handleError);    
}

