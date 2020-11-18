import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { Button } from 'reactstrap';
import InputField from '../../../custom-fields/InputField';
import './Login.scss';
import { Link } from 'react-router-dom';

Login.propTypes = {

};

function Login(props) {
  const initialValue = {
    email: '',
    password: '',
  }
  return (
    <div className="login">
      <div className="login__opacity">
        <div className="login__main">
          <div className="login__main__left">

          </div>
          <div className="login__main__right">
            <div className="login__main__right__content">
              <div className="login__main__right__content__title">
                Login
            </div>
              <Formik initialValues={initialValue}>
                {
                  formikProps => {
                    return (
                      <Form>
                        <FastField
                          name="email"
                          component={InputField}

                          label="Email"
                          placeholder="email..."
                        />
                        <FastField
                          name="password"
                          component={InputField}

                          type="password"
                          label="Password"
                          placeholder="password..."
                        />
                        <Button type="submit">Login</Button>
                      </Form>
                    )
                  }
                }
              </Formik>
              <div className="login__register">
                Register in here <Link to="/register">Register</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;