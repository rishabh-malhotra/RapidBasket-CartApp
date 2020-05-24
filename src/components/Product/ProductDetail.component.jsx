import React, { Component } from "react";
import './ProductDetail.css';
import { connect } from "react-redux";
import { getProduct } from '../../redux/actions/productActions';
import { bindActionCreators } from "redux";
import { Spinner } from '../common'


class ProductDetail extends Component {

    state = {
        product: {},
        isMobileInfoLoading: false
    }

    componentDidMount() {
        console.log(this.props);
        let productId = this.props.match.params.id;
        console.log(productId)
        this.props.getProduct(productId);
    }

    render() {
        return (
            <>
                {this.props.isMobileInfoLoading ? <Spinner /> : <>
                    <div className="container top-buffer">
                        <div className="row mt-20">
                            <div className=" col-sm-4">
                                <div class="card">
                                    <div class="card-body">
                                    <img className="product-desc-img" src={this.props.product.image} style={{ float: 'left' }} alt="" />
                                </div>
                                </div>
                            </div>

                            <div className="container-fluid col-sm-8">
                                <h2>{this.props.product.name}</h2>
                                <p><span className="product-exp-title">Manufacturer : </span> {this.props.product.manufacturer}</p>
                                <p><span className="product-exp-title">Product Description : </span> {this.props.product.description}</p>
                                <p><span className="product-exp-title">Price : </span>&#8377; {this.props.product.price}</p>
                                <p><span className="product-exp-title">RAM : </span> {this.props.product.ram}</p>
                                <p><span className="product-exp-title">Storage : </span> {this.props.product.storage}</p>
                                <button className="btn btn-success btn-sm" >Add To Cart</button>
                                {/* onClick={cartClickHandler} */}
                            </div>

                        </div>

                    </div>
                </>
                }

            </>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         products: state.products.products,
//         productsCount: state.products.totalProducts,
//         isLoading: state.products.isProductsLoading
//     }
// }


const mapStateToProps = state => {
    return {
        product: state.product.product,
        isMobileInfoLoading: state.product.isProductInfoLoading
    }
}

const mapDispatchToProps = (dispatch) => ({
    getProduct: (args) => dispatch(getProduct(args))
    // return {
    //     actions: {
    //         getProduct(args) : bindActionCreators(getProduct(args), dispatch)
    //     }
    // }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);


