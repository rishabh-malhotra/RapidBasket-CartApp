import React, { Component } from "react";

class Product extends Component {
    constructor() {
        super();
    }

    componentDidMount() {

    }


    render() {
        return (
            <React.Fragment>
                <div className="col-sm-6 col-md-4">
                    <div className="card">
                        <img src="" className="card-img-top img-fluid" alt="product" />
                        <div className="card-body">
                            <h5 className="card-title"> Sample  Title</h5>
                            <p> 50,000</p>
                            <div className="text-center">
                                <button className="btn btn-success">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


export default Product;