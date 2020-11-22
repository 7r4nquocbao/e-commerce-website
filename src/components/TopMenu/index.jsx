import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Badge, Col, Container } from 'reactstrap';
import './TopMenu.scss';
import topLogo from '../../assets/images/logo-no-title.png';


const TopMenu = () => {

  function getQuantity(){
    const cart = JSON.parse(localStorage.getItem('cart'));
    let count = 0;
    cart && cart.forEach(item => {
      count += item.quantity
    })
    return count;
  }

  return (
    <Container>
      <div className="menu">
        <div className="menu__logo">

          <NavLink
            to="/"
            className="menu__link menu__logo"
          >
            <img src={topLogo} width='60px'/>
        </NavLink>

        </div>
        <div className="menu__center">

          <Col sm="auto">
            <NavLink
              exact
              to="/"
              className="menu__link"
              activeClassName="menu__link--active"
            >
              Home
        </NavLink>
          </Col>
          <Col sm="auto">
            <NavLink
              exact
              to="/"
              className="menu__link"
              activeClassName="menu__link--active"
            >
              Products
        </NavLink>
          </Col>
          <Col sm="auto">
            <NavLink
              exact
              to="/Profile"
              className="menu__link menu__hasSub"
              activeClassName="menu__link--active"
            >
              User
          </NavLink>
          </Col>
        </div>

        <div className="menu__function">
          <Col sm="auto">
            <NavLink
              exact
              to="/search"
              className="menu__link menu__function__search"
              activeClassName="menu__link--active"
            >
              <i class="fas fa-search"></i>
            </NavLink>
          </Col>
          <Col sm="auto">
            <NavLink
              exact
              to="/cart"
              className="menu__link menu__function__cart"
              activeClassName="menu__link--active"
            >
              <i class="fas fa-shopping-cart"></i>
              <span>Cart</span>
              <Badge color="danger" pill>{getQuantity()}</Badge>
            </NavLink>
          </Col>
        </div>
      </div>

    </Container>
  );
};

export default TopMenu;