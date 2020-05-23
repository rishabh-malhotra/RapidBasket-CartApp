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
                        <div class="embed-responsive embed-responsive-16by9">
                            <img src={this.props.product.image} className="card-img-top" alt={this.props.product.slug} />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.product.name}</h5>
                            <p> {this.props.product.price} </p>
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