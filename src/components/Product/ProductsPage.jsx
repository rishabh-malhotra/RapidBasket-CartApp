import React, { Component } from "react";
import ProductList from './ProductList.component';
import SearchComponent from '../common/Search.component'
import { SortComponent } from "../common";
import {connect} from 'react-redux';
class ProductsPage extends Component {

    render() {
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
                <div className="container top-buffer">
                <ProductList />
                </div>
                </React.Fragment>
        );
    }
}

export default ProductsPage;