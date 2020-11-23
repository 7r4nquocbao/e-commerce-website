import { FastField, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import InputField from '../../../custom-fields/InputField';
import './Login.scss';
import { Link, useHistory } from 'react-router-dom';
import {fb, firestore} from '../../../app/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators, unwrapResult } from '@reduxjs/toolkit';
import { saveUser, setLogged } from '../../../app/userSlice';

Login.propTypes = {

};

function Login(props) {

  let history = useHistory();
  const dispatch = useDispatch();

  const logged = useSelector(state => state.users.isLogged);

  const [roles, setRoles] = useState([{id: '', role: ''}]);
  const [roleUser, setRoleUser] = useState([{id: '', role: '', user: ''}]);

  useEffect(() => {

    fb.auth().onAuthStateChanged(function(user) {
      if (user) {
        dispatch(setLogged(true));
      } else {
        dispatch(setLogged(false));
      }
    });

    firestore.collection('roles').get().then(function(querySnapshot) {
      const roles = [];
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          roles.push({...doc.data(), id: doc.id});      
      });
      setRoles(roles);
    });

    firestore.collection('role-user').get().then(function(querySnapshot) {
      const roleUser = [];
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          roleUser.push({...doc.data(), id: doc.id});      
      });
      setRoleUser(roleUser);
    });
    
    

  }, [])

  const signIn = (email, password) => (
    fb.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        const roleIs = roleUser[roleUser.findIndex(role => role.user === user.user.uid)].role;
        const roleNameIs = roles[roles.findIndex(role => role.id === roleIs)].role;
        if(roleNameIs === 'Administrator') {
          history.push('/admin-product');
        }
        else{
          history.push('/');
        }
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

  if(logged === false) {
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
    )
  }
  else {
    return(
      <h1>You must be sign out before.</h1>
    )    
  }  
}

export default Login;