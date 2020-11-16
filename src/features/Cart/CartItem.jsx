import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup } from 'reactstrap';

CartItem.propTypes = {
    
};



function CartItem(props) {
    const { data } = props;
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')));
    console.log(cart);

    function getItemById(targetId){
 
        let target = data.findIndex(item => item.id === targetId);
        return data[target];
    }

    function handleRemoveItem(targetId){
        const newCart = cart.filter(item => item.id !== targetId);
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
    }

    function genData(){
        if(cart)
        {
            
        }
        else{
            return '';
        }
        
    }

    return (
        <div>            
            {
                cart.map((item, index) => { 
                    return(
                        <div>
                            <h4 key={item.id}>{JSON.stringify(getItemById(item.id))}</h4>
        
                            <Form inline>
                                <FormGroup >
                                    <Button>-</Button>
                                    <h4>{item.quantity}</h4>
                                    <Button>+</Button>
                                </FormGroup>
                            </Form>   
        
                            <Button onClick={() => handleRemoveItem(item.id)}>remove</Button>
                            <hr/>
                        </div>                    
                    )
                })
            }
        </div>
    );
}

export default CartItem;