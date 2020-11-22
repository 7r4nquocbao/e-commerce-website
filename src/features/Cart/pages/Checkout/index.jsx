import React from 'react';
import PropTypes from 'prop-types';
import CheckOutForm from '../../components/CheckoutForm';
import Title from '../../../../components/Title';

Checkout.propTypes = {

};

function Checkout(props) {
  return (
    <div>
      <Title title="Checkout Information" />
      <CheckOutForm />
    </div>
  );
}

export default Checkout;