import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CheckOutForm from '../../components/CheckoutForm';
import Title from '../../../../components/Title';
import { useHistory } from 'react-router-dom';
import { firestore } from '../../../../app/firebase';

Checkout.propTypes = {

};

function Checkout(props) {

  const cart = localStorage.getItem('cart');


  const handleOnSubmitClick = (values => {
    console.log('form submit: ', values);

    firestore.collection("orders").add(values)
      .then(function (order) {
        const x = JSON.parse(localStorage.getItem('cart'));
        console.log('list item', x);
        for (const item of x) {

          firestore.collection("order-details").doc().set({
            Quantity: item.quantity,
            Price: item.quantity * item.InputCost,
            idProduct: item.id,
            idOrder: order.id,
          })
            .then(function () {
              console.log("Document successfully written!");
            })
            .catch(function (error) {
              console.error("Error writing document: ", error);
            });
        }

        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });

  })


  const history = useHistory();





  return (
    <div>
      <Title title="Checkout Information" />
      <CheckOutForm
        onSubmit={handleOnSubmitClick}
        cart={cart} />
    </div>
  );
}

export default Checkout;