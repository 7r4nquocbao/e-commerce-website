import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProductList from '../../components/ProductList';
import { firestore } from '../../../../app/firebase';
import { Container, Row } from 'reactstrap';
import ProductCard from '../../components/ProductCard';

MainPage.propTypes = {

};

function MainPage(props) {

  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')));

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
      setCart(cartItems);
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
        setCart(cartItems);
      }
      else {
        let newCart = [...cartItems];
        newCart[test].quantity += 1;
        localStorage.setItem('cart', JSON.stringify(newCart));
        setCart(cartItems);
      }
    }

  }
  const [products, setProducts] = useState([]);

  useEffect(() => {
    firestore.collection("products").get().then(function (querySnapshot) {
      // const products = [];
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        products.push({ ...doc.data(), id: doc.id });
      });
      setProducts(products);
      console.log('list product', { products });
    });
  }, []);

  const displayData = () => {
    return (
      <Container>
        <Row>
          {
            products.map((item, index) => {
              return (
                <ProductCard product={item} key={index} AddToCartClick={() => handleAddToCart(item)} />
              )
            })
          }
        </Row>
      </Container>

    )
  }

  return (
    <div>
      {/* <ProductList
        productList={products}
        onAddToCart={handleAddToCart}
      /> */}
      {/* {JSON.stringify(products)} */}
      {displayData()}
    </div>
  );

}
export default MainPage;