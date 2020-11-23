import React, { Suspense, useEffect, useState } from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {db, fb, sighIn} from './app/firebase'

import './App.scss';

import NotFound from './components/NotFound';
import Header from './components/Header';
import TopMenu from './components/TopMenu';
import { useDispatch, useSelector } from 'react-redux';
import store from './app/store';
import { getData } from './app/productSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import Checkout from './features/Cart/pages/Checkout';
import Details from './features/Products/pages/Details';

const Home = React.lazy(() => import('./features/Home'));
const Login = React.lazy(() => import('./features/Authentication/Login'))
const Register = React.lazy(() => import('./features/Authentication/Register'))
const Search = React.lazy(() => import('./features/Search'))
const Cart = React.lazy(() => import('./features/Cart'))
const AdminProduct = React.lazy(() => import('./features/Admin/Admin-Product'))
const Profile = React.lazy(() => import('./features/Authentication/Profile'))


function App() {
  
  const dispatch = useDispatch();
  const [enable, setEnable] = useState(false);

  useEffect(async () => {
      const actionResult = await dispatch(getData());
      const data = unwrapResult(actionResult);
      console.log(data);
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
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/details" component={Details}/>
            <Route component={NotFound}/>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
