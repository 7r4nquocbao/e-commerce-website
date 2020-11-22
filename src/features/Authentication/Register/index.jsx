import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';
import { fb, firestore } from '../../../app/firebase';
import InputField from '../../../custom-fields/InputField';
import { AccountInfo } from '../../../models/AccountInfo';
import { customerRoleId } from '../../../models/Role'
import './Register.scss';


Register.propTypes = {

};

function Register(props) {

 
  let userInfo = AccountInfo;
  const history = useHistory();

  const registerUser = (email, password) => {
    fb.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
      firestore.collection("user-infos").doc(user.user.uid).set(AccountInfo)
      .then(function() {
          console.log("Document successfully written!");
      })
      .catch(function(error) {
          console.error("Error writing document: ", error);
      });

      firestore.collection("role-user").doc().set({role: 'Eh3hgU7v089K8gETHtTK', user: user.user.uid})
      .then(function() {
          console.log("Document successfully written!");
      })
      .catch(function(error) {
          console.error("Error writing document: ", error);
      });

      console.log(user);
      history.push('/');
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
  }


  const initialValues = {
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
          <Formik initialValues={initialValues}
            validate={values => {
              const errors = {};
              if (!values.email) {
                errors.email = 'Required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }

              if(values.password.length < 8) {
                errors.password = 'password must be at least 8 charaters';
              }

              if(values.confirmPassword !== values.password) {
                errors.confirmPassword = 'confirm password do not match';
              }
              console.log(errors);
              return errors;
            }}

            onSubmit = {(values, {setSubmitting}) => {
              registerUser(values.email, values.password);
            }}
          >
            {
              ({isSubmitting}) => {
                return (
                  <Form>
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
                    <Button type='submit'>Register</Button>
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