import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, FormGroup, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { db } from '../../../app/firebase';
import { Product } from '../../../models/Product'

import Images from '../../../constants/Image';
import './ProductList.scss';

function ProductList(props) {

  // const [data, setData] = useState([]);
  // const getProducts = async () => {
  //     db.collection('products').onSnapshot((querySnapshot) => {
  //     const docs = [];
  //     querySnapshot.forEach((doc) => {
  //         docs.push({ ...doc.data(), id: doc.id });
  //     });
  //     setData(docs);
  //     });
  // };

  // useEffect(() => {
  //     getProducts();
  // },[]);

  const { data } = props;

  function handleAddToCart(item) {
    let cartItems = [];
    let cart = localStorage.getItem('cart');
    if (cart === null) {
      let product = {
        ...item,
        quantity: 1
      };
      cartItems.push(product);
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
    else {
      let cartItems = JSON.parse(cart);
      let test = cartItems.findIndex(product => product.id === item.id);
      if (test < 0) {
        let product = {
          ...item,
          quantity: 1
        };
        let newCart = [...cartItems, product];
        localStorage.setItem('cart', JSON.stringify(newCart));
      }
      else {
        let newCart = [...cartItems];
        newCart[test].quantity += 1;
        localStorage.setItem('cart', JSON.stringify(newCart));
      }
    }

  }

  // function handleAddProduct(){
  //   let iProduct = Product;
  //   iProduct.Name = 'GamaKay K66';
  //   iProduct.InputCost = 400;
  //   iProduct.Profit = 10;
  //   iProduct.Sale = 5;
  //   iProduct.Thumbnail = 'https://imgaz1.staticbg.com/thumb/large/oaupload/ser1/banggood/images/95/76/841501c8-34bd-43c7-a9db-7761640100e3.jpg';
  //   iProduct.Images = "['https://imgaz1.staticbg.com/thumb/large/oaupload/ser1/banggood/images/95/76/841501c8-34bd-43c7-a9db-7761640100e3.jpg']";
  //   iProduct.Stock = 1000;
  //   iProduct.idCategory = '';
  //   iProduct.idBrand = '';
  //   alert(JSON.stringify(iProduct));

  //   db.collection('products').add(iProduct)
  //   .then(function(docRef) {
  //       console.log("Document written with ID: ", docRef.id);
  //   })
  //   .catch(function(error) {
  //       console.error("Error adding document: ", error);
  //   });
  // }

  return (

    <Container>
      <Row>
        {
          data.length > 0 && data.map((product, index) => (
            <Col lg="3" md="4" sm="6" xs="12">
              <div className="product">
                <div className="product__image">
                  <Link to="">
                    <img src={product.Thumbnail} />
                  </Link>
                </div>
                <div className="product__info">
                  <div className="product__info__title">{product.Name}</div>
                  <div className="product__info__price">{`${product.InputCost}$`}</div>
                  <div
                    className="product__info__button"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to cart
                  </div>
                </div>
              </div>
            </Col>
          ))
        }
      </Row>
    </Container >
  );

}

export default ProductList;