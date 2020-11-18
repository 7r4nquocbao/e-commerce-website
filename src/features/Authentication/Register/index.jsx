import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { Button } from 'reactstrap';
import InputField from '../../../custom-fields/InputField';
import './Register.scss';


Register.propTypes = {

};

function Register(props) {
  const initialValues = {
    firstName: '',
    lastName: '',
    address: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',

  }
  return (
    <div className="register">
      <div className="register__opacity">
        <div className="register__main">
          <div className="register__title">
            Register
          </div>
          <Formik initialValues={initialValues}>
            {
              formikProps => {
                return (
                  <Form>
                    <FastField
                      name="firstName"
                      component={InputField}

                      label="First Name"
                      placeholder="Press your first name..."
                    />
                    <FastField
                      name="lastName"
                      component={InputField}

                      label="Last Name"
                      placeholder="Press your last name..."
                    />

                    <FastField
                      name="address"
                      component={InputField}

                      label="Address"
                      placeholder="Press your address..."
                    />
                    <FastField
                      name="phoneNumber"
                      component={InputField}

                      type="tel"
                      label="Phone number"
                      placeholder="Press your phone number..."
                    />
                    <FastField
                      name="email"
                      component={InputField}

                      type="email"
                      label="Email"
                      placeholder="Press your email..."
                    />
                    <FastField
                      name="password"
                      component={InputField}

                      type="password"
                      label="Password"
                      placeholder="Press your password..."
                    />
                    <FastField
                      name="confirmPassword"
                      component={InputField}

                      type="password"
                      label="Confirm Password"
                      placeholder="Press your confirm password..."
                    />
                    <Button>Register</Button>
                  </Form>
                )
              }
            }
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Register;