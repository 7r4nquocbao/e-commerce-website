import axios from 'axios';
import React, { Component } from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import firebase from '../../../app/FirebaseConnect';

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
    console.log(firebase);
    function handleAddToCart(item){
      let cartItems = [];
      let cart = localStorage.getItem('cart');
      if(cart === null){
        let product = {
          id: item.id,
          quantity: 1
        };
        cartItems.push(product);
        localStorage.setItem('cart', JSON.stringify(cartItems));
      }
      else{
        let cartItems = JSON.parse(cart);
        let test = cartItems.findIndex(product => product.id === item.id);
        if(test < 0) {
          let product = {
            id: item.id,
            quantity: 1
          };
          let newCart = [...cartItems, product];
          localStorage.setItem('cart', JSON.stringify(newCart));
        }
        else{
          let newCart = [...cartItems];
          newCart[test].quantity += 1;
          localStorage.setItem('cart', JSON.stringify(newCart));
        }
       
      }
    }

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
                    <div className="product__info__title">{product.id}</div>
                    <div className="product__info__price">{product.productPrice}</div>
                  </div>                  
                </div>
                <Button color="primary" onClick={() => handleAddToCart(product)}>Add to cart</Button>
              </Col>
            ))

          }
        </Row>

      </Container >

    )
  }
}

export default ProductList;