import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard';
import { Col } from 'reactstrap';

ProductList.propTypes = {
  productList: PropTypes.array,
  onAddToCart: PropTypes.func,

};
ProductList.defaultProps = {
  productList: [],
  onAddToCart: null,
}
function ProductList(props) {
  const { productList, onAddToCart } = props;

  return (
    <div>
      {
        productList.map((item, index) => {
          <Col key={index} xs="12" md="4" lg="3">
            <ProductCard
              product={item}
              onAddToCartClick={onAddToCart}
            />
          </Col>
        })
      }
    </div>
  );
}

export default ProductList;