import React from 'react';
import PropTypes from 'prop-types';
import { FastField, Form, Formik } from 'formik';
import InputField from '../../../../custom-fields/InputField';
import RadioField from '../../../../custom-fields/RadioField';
import './Checkout.scss';
import { Button } from 'reactstrap';
CheckOutForm.propTypes = {

};

function CheckOutForm(props) {
  const initialValues = {
    name: '',
    address: '',
    phone: '',
    pay: null,
  }
  return (
    <Formik initialValues={initialValues}>

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
              <Button>Submit</Button>
            </Form>
          );
        }
      }

    </Formik>
  );
}

export default CheckOutForm;