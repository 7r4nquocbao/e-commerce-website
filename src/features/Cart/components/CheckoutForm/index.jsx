import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { Button } from 'reactstrap';
import InputField from '../../../../custom-fields/InputField';
import RadioField from '../../../../custom-fields/RadioField';
import PropTypes from 'prop-types';
import './Checkout.scss';

CheckOutForm.propTypes = {
  onSubmit: PropTypes.func,
};
CheckOutForm.defaultProps = {
  onSubmit: null,
}

function CheckOutForm(props) {
  const initialValues = {
    name: '',
    address: '',
    phone: '',
    pay: null,
  }
  const { cart } = props;
  console.log('cart: ', { cart });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={props.onSubmit}
    >

      {
        formikProps => {

          return (
            <Form className="checkout-form">
              <FastField
                name="name"
                component={InputField}

                label="Name's Receiver"
                placeholder="Press name's receiver..."
              />
              <FastField
                name="address"
                component={InputField}

                label="Address"
                placeholder="Press address..."
              />
              <FastField
                name="phone"
                component={InputField}

                label="Phone number"
                placeholder="Press phone number..."
              />
              <FastField
                name="email"
                component={InputField}

                label="Email"
                placeholder="Press email..."
              />
              <div className="choices">
                <FastField
                  name="pay"
                  component={RadioField}

                  id="delivery"
                  label="Payment on delivery"
                />
                <FastField
                  name="pay"
                  component={RadioField}

                  id="paypal"
                  label="Payment by Paypal"
                />
              </div>
              <Button
                color="danger"
                type="submit"
              >Submit</Button>
            </Form>
          );
        }
      }

    </Formik>
  );
}

export default CheckOutForm;