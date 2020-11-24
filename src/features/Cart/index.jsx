import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import Checkout from './pages/Checkout';
import CartItem from './pages/Main';


function Cart(props) {

    const match = useRouteMatch();
    console.log(match);

    return (

        <div>
            <Switch>
                <Route exact path={`${match.url}`} component={CartItem} />
                <Route exact path={`${match.url}/checkout`} component={Checkout} />
            </Switch>
        </div>
    );
}

export default Cart;