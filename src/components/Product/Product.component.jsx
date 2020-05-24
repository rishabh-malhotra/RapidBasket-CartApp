import React from "react";
import { Link } from "react-router-dom"
import './Product.css'

const Product = (props) => {
    let { product } = props;
    let link = "/product/" + product.slug;
    return (
        <React.Fragment>
            {/* <Link to={link}> */}
            <div className="col-sm-6 col-md-4" style={{marginTop:"10px"}}>
                <div className="card">
                <img src={product.image} className="card-img-top" style={{ height: "11vw" }} alt={product.slug} />
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">&#8377; {product.price} </p>
                        <div className="text-center">
                            <button className="btn btn-success">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* </Link> */}
        </React.Fragment>
    );
}


export default Product;