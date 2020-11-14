import React from 'react';

import './Header.scss';

import { Col } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';

Header.propTypes = {

};

function Header(props) {
    return (

        <div className="header">
            <Col sm="auto">
                <div className="header__social">
                    <NavLink to=""><i class="fab fa-instagram-square"></i></NavLink>
                    <NavLink to=""><i class="fab fa-facebook-square"></i></NavLink>
                    <NavLink to=""><i class="fab fa-twitter-square"></i></NavLink>
                    <NavLink to=""><i class="fab fa-behance-square"></i></NavLink>
                    <NavLink to=""><i class="fab fa-reddit"></i></NavLink>
                </div>

            </Col>
            <Col sm="auto">
                <div className="header__authentication">
                    <NavLink to="/login">Login</NavLink><span>/</span>
                    <NavLink to="/register">Register</NavLink>
                </div>

            </Col>
        </div>

    );
}

export default Header;