import React, { Suspense } from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import './App.scss';

import NotFound from './components/NotFound';
import Header from './components/Header';
import TopMenu from './components/TopMenu';

const Home = React.lazy(() => import('./features/Home'));
const Login = React.lazy(() => import('./features/Authentication/Login'))
const Register = React.lazy(() => import('./features/Authentication/Register'))
const Search = React.lazy(() => import('./features/Search'))
const Cart = React.lazy(() => import('./features/Cart'))

function App() {
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
            <Route component={NotFound}/>
          </Switch>

        </BrowserRouter>
      </Suspense>

    </div>
  );
}

export default App;
