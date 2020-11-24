import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Product.scss';

ProductCard.propTypes = {
  product: PropTypes.object,
  AddToCartClick: PropTypes.func,
};
ProductCard.defaultProps = {
  product: {},
  AddToCartClick: null,
}

function ProductCard(props) {

  const { product, AddToCartClick } = props;

  return (
    <div>
      <Col lg="3" md="4" sm="6" xs="12">
        <div className="product">
          <div className="product__image">
            <Link to="/details">
              <img src={product.Thumbnail} />
            </Link>
          </div>
          <div className="product__info">
            <div className="product__info__title">{product.Name}</div>
            <div className="product__info__price">{product.InputCost}</div>
            <div
              className="product__info__button"
              onClick={() => AddToCartClick(product)}
            >
              Add to cart
            </div>
          </div>
        </div>
      </Col>

    </div>
  );
}

export default ProductCard;