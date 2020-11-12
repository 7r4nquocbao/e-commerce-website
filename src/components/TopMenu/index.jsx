import React from 'react';
import { NavLink, Row, Col, Nav } from 'reactstrap';

import './TopMenu.scss';

const TopMenu = () => {
  return (

    <div className="top__menu">
      <Row className="menu">
        <Col sm="3">
          <NavLink to="#" className="menu__logo">
            Logo
        </NavLink>
        </Col>
        <Col sm="1">
          <NavLink to="#" className="menu__link">
            Home
        </NavLink>
        </Col>
        <Col sm="1">
          <NavLink to="#" className="menu__link">
            Products
        </NavLink>
        </Col>
        <Col sm="1">
          <NavLink to="#" className="menu__link menu__subtitle">
            User
          </NavLink>
        </Col>
        <div className="menu__function">
          <Col sm="auto">
            <NavLink to="#" className="menu__link menu__function__search">
              <i class="fas fa-search"></i>
            </NavLink>
          </Col>
          <Col sm="auto">
            <NavLink to="#" className="menu__link menu__function__cart">
              <i class="fas fa-shopping-cart"></i>
              <span>Cart</span>
              <span>(0)</span>
            </NavLink>
          </Col>
        </div>
      </Row>

    </div >

  );
};

export default TopMenu;