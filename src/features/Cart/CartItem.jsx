import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup } from 'reactstrap';

CartItem.propTypes = {
    data: PropTypes.array
};

CartItem.defaultProps = {
    data: []
}

function CartItem(props) {
    const { data } = props;
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')));
    console.log('Cart' , cart);

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

        if(cart.length > 0){
            return(
                cart.map((item, index) => { 
                    return(
                        <div>
                            <h4 key={index}>{JSON.stringify(getItemById(item.id))}</h4>
        
                            <Form inline>
                                <FormGroup >
                                    <Button onClick={() => handleDecreaseItem(item.id)}>-</Button>
                                    <h4>{item.quantity}</h4>
                                    <Button onClick={() => handleIncreaseItem(item.id)}>+</Button>
                                </FormGroup>
                            </Form>   
        
                            <Button onClick={() => handleRemoveItem(item.id)}>remove</Button>
                            <hr/>
                        </div>                    
                    )
                })
            )
            
        }
        else{
            return <h2>Nothing here.</h2>
        }        
    }

    return (
        <div>            
            {genData()}
        </div>
    );
}

export default CartItem;