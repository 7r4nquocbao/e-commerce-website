import React from 'react';
import { Container, Row, Col, NavLink } from 'reactstrap';

import './Header.scss';
Header.propTypes = {

};

function Header(props) {
    return (

        <div className="header">
            <Col sm="auto">
                <div className="header__social">
                    <NavLink><i class="fab fa-instagram-square"></i></NavLink>
                    <NavLink><i class="fab fa-facebook-square"></i></NavLink>
                    <NavLink><i class="fab fa-twitter-square"></i></NavLink>
                    <NavLink><i class="fab fa-behance-square"></i></NavLink>
                    <NavLink><i class="fab fa-reddit"></i></NavLink>
                </div>

            </Col>
            <Col sm="auto">
                <div className="header__authentication">
                    <NavLink>Login</NavLink>
                    <NavLink>Register</NavLink>
                </div>

            </Col>
        </div>

    );
}

export default Header;