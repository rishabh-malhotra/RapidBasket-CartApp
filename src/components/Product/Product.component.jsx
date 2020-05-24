import React from "react";
import { Link } from "react-router-dom";
import PropTypes from"prop-types";
import './ProductDetail.css';

const Product = ({product}) => {
    let link = "/product/" + product.id;
    return (
        <React.Fragment>
            {/* <Link to={link}> */}
            <div className="col-sm-6 col-md-4" style={{marginTop:"10px"}}>
                <div className="card">
                    {/* <div className="custom-card-img"> */}
                <img src={product.image} className="card-img-top img-fluid img-responsive" style={{maxHeight:"312px",width:"100%" }} alt={product.slug} />
                {/* </div> */}
                    <div className="card-body">
                        <Link to={link}><h5 className="card-title">{product.name}</h5></Link>
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

Product.propTypes={
    product:PropTypes.object.isRequired
}


export default Product;