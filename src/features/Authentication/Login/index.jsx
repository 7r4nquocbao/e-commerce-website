import { FastField, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { Button } from 'reactstrap';
import InputField from '../../../custom-fields/InputField';
import './Login.scss';
import { Link, useHistory } from 'react-router-dom';
import {fb} from '../../../app/firebase';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';

Login.propTypes = {

};

function Login(props) {
  let history = useHistory();

  const signIn = async (email, password) => (
    await fb.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        const userLogged = localStorage.getItem('user');
        if(!userLogged){
          localStorage.setItem('user', user.user.uid);
        }
        history.push('/');
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        alert(errorCode, errorMessage);
        return error;
      })
  )
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
              <Formik initialValues={initialValue}
                validate={values => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = 'Required';
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                  ) {
                    errors.email = 'Invalid email address';
                  }
                  return errors;
                }}
                  onSubmit={(values, { setSubmitting }) => {
                    signIn(values.email, values.password);
                  }
                }             
              >
                {
                  ({isSubmitting}) => {
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
                        <Button type="submit" >Login</Button>
                      </Form>
                    )
                  }
                }
              </Formik>
              <div className="login__register">
                Register in here <Link to="/register">Register</Link>
              </div>
            </div>
            <h1>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;