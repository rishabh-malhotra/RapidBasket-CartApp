import React from "react";
import Product from "./Product.component";

const ProductList = (props) => {
  console.log(props)
  return (
    <div className="container top-buffer">
      <div className="row">
        {props.pageOfItems.map(product =>
          <Product key={product.id} product={product} />
        )
        }
      </div>
    </div>
  )
}

export default ProductList;
