import React, { Component } from "react";
import ProductList from './ProductList.component';
import SearchComponent from '../common/Search.component'
import { SortComponent, Spinner, Pagination } from "../common";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { getProducts,updateSearch } from '../../redux/actions/productActions';
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

    }

    componentDidMount() {
        this.props.getAllProducts({searchText:this.props.searchCriteria});
        console.log("props",this.props)
    }

    onChangePage = filteredProducts => this.setState({ filteredProducts: filteredProducts });

     updateSearch (searchText){
      console.log("SEARCHTEXT---------------------------",searchText)
      console.log("props-------------",this.props)
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
                            <SearchComponent onSearchProduct={this.updateSearch}/>
                        </div>
                        <div className="col-6">
                            <SortComponent />
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
        searchCriteria:state.searchProducts.searchCriteria
    }
}

const mapDispatchToProps = (dispatch) => ({
    //return {
        // actions: {
        //     getAllProducts: bindActionCreators(getProducts, dispatch)
        // }
        getAllProducts:(args)=>dispatch(getProducts(args)),
        updateSearch:(searchText) =>dispatch(updateSearch(searchText))
    })
//}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);