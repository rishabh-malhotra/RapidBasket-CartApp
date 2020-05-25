import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import './ProductDetail.css';

const Product = ({ product }) => {
    let link = "/product/" + product.id;
    return (
        <React.Fragment>
            {/* <Link to={link}> */} 
            <div className="col-sm-6 col-md-4" style={{ marginTop: "10px" }}>
            <div className="card">
            <div style={{height:'300px',width:'300px',textAlign:'center'}}>
                        {/* card-img-top img-fluid img-responsive */}
                    <img src={product.image} className="custom-image"  alt={product.slug} />
                    </div>
               
                    {/* <div className="custom-card-img"> */}
                   
                    {/* </div> */}
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">&#8377; {product.price} </p>
                        <div className="text-center">
                            <Link to={link}><button className="btn btn-primary">View Product</button></Link>
                            <button className="btn btn-success" style={{ margin: "5px" }}>Add To Cart</button>

                        </div>
                    </div>
                </div>
            </div>
            {/* </Link> */}
        </React.Fragment>
    );
}

Product.propTypes = {
    product: PropTypes.object.isRequired
}


export default Product;