import React from "react";
import Product from "./Product.component";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() { 
    console.log(this.props);
  }

  render() {
    return (
      <div className="container top-buffer">
      <div className="row">
        {this.props.products.map(product=>
          <Product key={product.id} product={product} />
        )
        }
        
      </div>
      </div>
    );
  }
}

export default ProductList;
