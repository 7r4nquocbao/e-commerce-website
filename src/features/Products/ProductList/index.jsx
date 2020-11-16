import axios from 'axios';
import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

import Images from '../../../constants/Image';
import './ProductList.scss';




class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  };

  componentDidMount() {
    const path = 'https://jkbc8.sse.codesandbox.io/products';
    axios.get(path).then(res => {

      this.setState({
        products: res.data,
      })
    })
  }
  render() {
    const { products } = this.state;
    return (
      <Container>
        <Row>
          {
            products.length > 0 && products.map((product, index) => (
              <Col lg="3" md="4" sm="6" xs="12">
                <div className="product">
                  <div className="product__image">
                    <Link to="">
                      <img src={Images.PRODUCT} />
                    </Link>
                  </div>
                  <div className="product__info">
                    <div className="product__info__title">{product.productName}</div>
                    <div className="product__info__price">{product.productPrice}</div>
                  </div>

                </div>
              </Col>
            ))

          }
        </Row>

      </Container >

    )
  }
}

export default ProductList;