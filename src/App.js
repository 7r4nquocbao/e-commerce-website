import React, { Suspense, useEffect, useState } from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {db, fb, firestore, sighIn} from './app/firebase'

import './App.scss';

import NotFound from './components/NotFound';
import Header from './components/Header';
import TopMenu from './components/TopMenu';
import { useDispatch, useSelector } from 'react-redux';
import store from './app/store';
import { getData } from './app/productSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import Checkout from './features/Cart/pages/Checkout';
import { adminRoleId } from './models/Role';
import { setAdmin, setLogged } from './app/userSlice';

const Home = React.lazy(() => import('./features/Home'));
const Login = React.lazy(() => import('./features/Authentication/Login'))
const Register = React.lazy(() => import('./features/Authentication/Register'))
const Search = React.lazy(() => import('./features/Search'))
const Cart = React.lazy(() => import('./features/Cart'))
const AdminProduct = React.lazy(() => import('./features/Admin/Admin-Product'))
const Profile = React.lazy(() => import('./features/Authentication/Profile'))
const InputProduct = React.lazy(() => import('./features/Admin/AdminInputProduct'))


function App() {
  
  const dispatch = useDispatch();

  useEffect(() => {

      dispatch(getData());

      fb.auth().onAuthStateChanged(function(user) {
        if (user) {
          dispatch(setLogged(true));
          firestore.collection('role-user').get().then(function(querySnapshot) {
            const list = [];
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                list.push({...doc.data(), id: doc.id});      
            });
            if(adminRoleId !== list[list.findIndex(role => role.user === user.uid)].role){
              console.log(adminRoleId, list[list.findIndex(role => role.user === user.uid)].role);
              dispatch(setAdmin(false));
            }
            else{
              console.log(adminRoleId, list[list.findIndex(role => role.user === user.uid)].role);
              dispatch(setAdmin(true));
            }
          });
        } else {
          dispatch(setLogged(false));
        }
      });
  }, []);

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/search" component={Search}/>
            <Route exact path="/cart" component={Cart}/>
            <Route exact path="/admin-product" component={AdminProduct}/>
            <Route exact path="/admin-input-product" component={InputProduct}/>
            <Route exact path="/profile" component={Profile}/>
            <Route component={NotFound}/>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
