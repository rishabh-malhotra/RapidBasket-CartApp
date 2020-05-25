import React, { Component } from "react";
import ProductList from './ProductList.component';
import SearchComponent from '../common/Search.component'
import { SortComponent, Spinner, Pagination } from "../common";
import { connect } from 'react-redux';
import { getProducts,updateSearch,updateSort } from '../../redux/actions/productActions';
import PropTypes from "prop-types";

class ProductsPage extends Component {
    state = {
        products: [],
        isLoading: false,
        filteredProducts:[],
        searchCriteria:''
    }

    constructor(props){
        super(props);
        this.updateSearch = this.updateSearch.bind(this);
        this.sortProduct=this.sortProduct.bind(this);
        this.props.getAllProducts({searchText:this.props.searchCriteria});
    }

    componentDidMount() {
        console.log("props",this.props)
    }

    onChangePage = filteredProducts => this.setState({ filteredProducts: filteredProducts });
    
    sortProduct (sortOrder) {
        console.log(sortOrder)
        this.props.updateSort(sortOrder);
        this.props.getAllProducts({searchText:this.props.searchCriteria,sorting : sortOrder});
    }

     updateSearch (searchText){
      this.props.updateSearch(searchText);
      this.props.getAllProducts({searchText:searchText});
    }

    render() {
        let conditionalComponent;
        let conditionComponent2;
        if(this.props.isLoading){
            conditionalComponent= <Spinner />
            conditionComponent2 = <></>
        }
        else{
            conditionalComponent = <ProductList  filteredProducts={this.state.filteredProducts} productsCount={this.props.productsCount} />
            conditionComponent2=<Pagination items={this.props.products}  onChangePage={this.onChangePage}/>
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
                            <SearchComponent onSearchProduct={this.updateSearch} searcht={this.props.searchCriteria}/>
                        </div>
                        <div className="col-6">
                            <SortComponent sortOrder={this.props.sortOrder} handleSort={this.sortProduct}/>
                        </div>
                    </div>
                </div>
               {conditionalComponent}
               {conditionComponent2}
            </React.Fragment>
        );
    }
}

ProductsPage.propTypes = {
    products: PropTypes.array.isRequired,
    productsCount:PropTypes.number.isRequired,
    isLoading: PropTypes.bool.isRequired,
    getAllProducts:PropTypes.func.isRequired,
    updateSearch:PropTypes.func.isRequired
  };

const mapStateToProps = state => {
    return {
        products: state.products.products,
        productsCount: state.products.totalProducts,
        isLoading: state.products.isProductsLoading,
        searchCriteria:state.searchProducts.searchCriteria,
        sortOrder:state.sortProducts.orderCode
    }
}

const mapDispatchToProps = (dispatch) => ({
    //return {
        // actions: {
        //     getAllProducts: bindActionCreators(getProducts, dispatch)
        // }
        getAllProducts:(args)=>dispatch(getProducts(args)),
        updateSearch:(searchText) =>dispatch(updateSearch(searchText)),
        updateSort : (orderCode) => dispatch(updateSort(orderCode)),
    })
//}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);