import React, { Component } from "react";
import ProductList from './ProductList.component';
import SearchComponent from '../common/Search.component'
import { SortComponent, Spinner } from "../common";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { getProducts } from '../../redux/actions/productActions';
import PropTypes from "prop-types";
class ProductsPage extends Component {
    state = {
        products: [],
        isLoading: false
    }

    componentDidMount() {
        this.props.actions.getAllProducts().catch(err=>console.log("zaads",err));
        console.log("props",this.props)
    }

    render() {
        let conditionalComponent;
        if(this.props.isLoading){
            conditionalComponent= <Spinner />
        }
        else{
            conditionalComponent = <ProductList products={this.props.products} productsCount={this.props.productsCount} />
        }
        return (
            <React.Fragment>
                <div className="container top-buffer">
                    <div className="row mt-20">
                        <div className="col">
                            <h1>Products</h1>
                        </div>
                    </div>
                    <div className="row mt-20">
                        <div className="col-6">
                            <SearchComponent />
                        </div>
                        <div className="col-6">
                            <SortComponent />
                        </div>
                    </div>
                </div>
               {conditionalComponent}
            </React.Fragment>
        );
    }
}

// ProductsPage.propTypes = {
//     products: PropTypes.array.isRequired,
//     productsCount:PropTypes.number.isRequired,
//     actions: PropTypes.object.isRequired,
//     isLoading: PropTypes.bool.isRequired
//   };

const mapStateToProps = state => {
    return {
        products: state.products.products,
        productsCount: state.products.totalProducts,
        isLoading: state.products.isProductsLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            getAllProducts: bindActionCreators(getProducts, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);