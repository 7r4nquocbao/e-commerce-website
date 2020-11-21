import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Table } from 'reactstrap';
import {getProducts} from '../../app/firebase';

import { db } from '../../app/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, getData, test } from '../../app/productSlice';
import TopMenu from '../../components/TopMenu';
import { unwrapResult } from '@reduxjs/toolkit';

function CartItem(props) {    

    const dispatch = useDispatch();
    const [data, setData] = useState([]);

    const productList = useSelector(state => state.products);
 
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')));

    function getItemById(targetId){ 
        let target = data.findIndex(item => item.id === targetId);
        return data[target];
    }

    function handleRemoveItem(targetId){
        const newCart = cart.filter(item => item.id !== targetId);
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
    }

    function handleDecreaseItem(targetId){
        let target = cart.findIndex(item => item.id === targetId);
        const newCart = [...cart];
        newCart[target].quantity -= 1;
        if(newCart[target].quantity < 1){
            newCart[target].quantity = 1;
        }
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
    }

    function handleIncreaseItem(targetId){
        let target = cart.findIndex(item => item.id === targetId);
        const newCart = [...cart];
        newCart[target].quantity += 1;
        if(newCart[target].quantity < 1){
            newCart[target].quantity = 1;
        }
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
    }

    function genData(){

        if(cart){
            if(cart.length > 0)
            {
                return(
                    <Table dark>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product name</th>
                                <th>Quantity</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item, index) => (
                                <tr>
                                    <th scope="row">{index}</th>
                                    <td>{item.Name}</td>
                                    <td><Form inline>
                                            <FormGroup >
                                                <Button onClick={() => handleDecreaseItem(item.id)}>-</Button>
                                                <h4> {item.quantity} </h4>
                                                <Button onClick={() => handleIncreaseItem(item.id)}>+</Button>
                                            </FormGroup>
                                        </Form>  
                                    </td>
                                    <td><Button color='danger' onClick={() => handleRemoveItem(item.id)}>Remove</Button></td>
                                </tr>
                                ))
                            }
                        </tbody> 
                    </Table>
                )
            }
            else{
                return <h2>Nothing here.</h2>
            }
        }
        else{
            return <h2>Nothing here.</h2>
        }        
    }
    return (
        
        <div>
            <TopMenu/>
            {JSON.stringify(productList)}
            {genData()}
        </div>
    );
}

export default CartItem;