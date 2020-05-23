import axios from "axios";
import { handleResponse,handleError } from './apiUtils'

const BASE_URL = 'http://localhost:4000/products';

function getAllProducts(){
    axios.get(BASE_URL)
    .then(handleResponse)
    .catch(handleError);
}

function getProduct(productName){
    axios.get(`${BASE_URL}/name=${productName}`)
    .then(handleResponse)
    .catch(handleError);    
}

export const productService = {
    getAllProducts,
    getProduct
} 

