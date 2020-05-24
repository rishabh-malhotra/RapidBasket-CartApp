import React from "react";
import Product from "./Product.component";
import PropTypes from "prop-types";

const ProductList = ({filteredProducts,productsCount}) => {
  console.log(filteredProducts)
  return (
    <div className="container top-buffer">
      <div className="row">
        {filteredProducts.map(product =>
          <Product key={product.id} product={product} />
        )
        }
      </div>
    </div>
  )
}

ProductList.propTypes = {
  filteredProducts:PropTypes.array.isRequired,
  productsCount:PropTypes.number.isRequired
}

export default ProductList;
