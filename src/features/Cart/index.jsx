import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../app/productSlice';
import { Button } from 'reactstrap';
import CartItem from './CartItem';
import Axios from 'axios';
Cart.propTypes = {

};

function Cart(props) {

  const [data, setData] = useState([]);
  
  function handleGetData() {
    const path = 'https://jkbc8.sse.codesandbox.io/products';
    Axios.get(path).then(res => {
      setData(res.data)
    })
  }

  useEffect(() => {
    handleGetData();
  }, [])

  return (
    <div>
      <CartItem data={data}/>
    </div>
  );
}

export default Cart;