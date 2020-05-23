import axios from "axios";


function getAllProducts(){
    let products;
    axios.get("http://localhost:4000/products")
    .then(
        (response) => {products = response.data;console.log("response",products);
    }).catch(
        (error) =>console.log(error)
    );
    console.log("products",products);
    return products;
}


function getProduct(productName){
    let product;
    axios.get(`http://localhost:4000/products/name=${productName}`).then(
        (response) =>
            product=response.data
        )
        .catch(
            (error) => console.error(error)
        )
    console.log(product);    
    return product;    
}

export const productService = {
    getAllProducts,
    getProduct
} 

