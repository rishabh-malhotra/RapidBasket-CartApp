import React from "react";
import Product from "./Product.component";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="container">
        <div className="row">
          <Product />
        </div>
      </div>
    );
  }
}

export default ProductList;
