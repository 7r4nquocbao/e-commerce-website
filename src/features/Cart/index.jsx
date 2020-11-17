import React, { useEffect, useState } from 'react';
import firebase from '../../app/FirebaseConnect';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../app/productSlice';
import { Button } from 'reactstrap';
import CartItem from './CartItem';
import Axios from 'axios';


Cart.propTypes = {

};

function Cart(props) {

  const ref = firebase.firestore().collection('products');
  console.log(ref);

  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);

  function getProducts(){
    ref.onSnapshot((querySnapShot) => {
      const items = [];
      querySnapShot.forEach((doc) => {
        items.push(doc.data());
      });
      setProducts(items);
      console.log(products);
    });
  }
  
  function handleGetData() {
    const path = 'https://jkbc8.sse.codesandbox.io/products';
    Axios.get(path).then(res => {
      setData(res.data)
    })
  }

  useEffect(() => {
    handleGetData();
    getProducts();
  }, [])

  return (
    <div>
      <CartItem data={data}/>
    </div>
  );
}

export default Cart;