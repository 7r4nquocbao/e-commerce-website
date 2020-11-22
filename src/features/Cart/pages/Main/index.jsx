import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import { Button, Container, Table } from 'reactstrap';
import './Cart.scss';


function CartItem(props) {

  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  const productList = useSelector(state => state.products);

  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')));

  function getItemById(targetId) {
    let target = data.findIndex(item => item.id === targetId);
    return data[target];
  }

  function handleRemoveItem(targetId) {
    const newCart = cart.filter(item => item.id !== targetId);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  }

  function handleDecreaseItem(targetId) {
    let target = cart.findIndex(item => item.id === targetId);
    const newCart = [...cart];
    newCart[target].quantity -= 1;
    if (newCart[target].quantity < 1) {
      newCart[target].quantity = 1;
    }
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  }

  function handleIncreaseItem(targetId) {
    let target = cart.findIndex(item => item.id === targetId);
    const newCart = [...cart];
    newCart[target].quantity += 1;
    if (newCart[target].quantity < 1) {
      newCart[target].quantity = 1;
    }
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  }

  function genData() {

    if (cart) {
      if (cart.length > 0) {
        return (
          <div className="cart">
            <Container>
              <Table bordered>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, index) => (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{item.Name}</td>
                      <td><img src={item.Thumbnail} style={{ width: "100px", height: "100px" }} /></td>
                      <td>{`${item.InputCost}$`}</td>
                      <td>
                        <div className="button-cart">
                          <div
                            className="button-cart__quantity"
                            onClick={() => handleDecreaseItem(item.id)}
                          >
                            -
                                                </div>
                          <p>{item.quantity}</p>
                          <div className="button-cart__quantity"
                            onClick={() => handleIncreaseItem(item.id)}
                          >
                            +
                                                </div>
                        </div>


                      </td>
                      <td><Button color='danger' onClick={() => handleRemoveItem(item.id)}>Remove</Button></td>
                    </tr>
                  ))
                  }
                </tbody>
              </Table>

              <div className="checkout">
                <div className="checkout__total">
                  <p>Total : { }</p>
                </div>
                <div className="checkout__button">
                  <Link to={`${match.url}/checkout`}>Check out</Link>
                </div>

              </div>

            </Container>

          </div>

        )
      }
      else {
        return <h2>Nothing here.</h2>
      }
    }
    else {
      return <h2>Nothing here.</h2>
    }
  }

  const match = useRouteMatch();
  console.log(match);
  return (
    <div>
      {genData()}
      {JSON.stringify(productList)}
    </div>
  );
}

export default CartItem;