import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import headerImg from '../../img/logo.png';
import './Navbar.css'

const NavBar = () => {
    return (
        <div>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="/home"><img src={headerImg} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link
                                className="text-decoration-none text-dark mx-2 my-auto fs-5"
                                to="/home"
                            >
                                Home
                            </Link>
                            <Link
                                className="text-decoration-none text-dark mx-2 my-auto fs-5"
                                to="/offer"
                            >
                                Offer
                            </Link>
                            <Link
                                className="text-decoration-none text-dark mx-2 my-auto fs-5"
                                to="/order"
                            >
                                My Order
                            </Link>
                            <Link
                                className="text-decoration-none text-dark mx-2 my-auto fs-5"
                                to="/login"
                            >
                                Log In
                            </Link>
                            <Link
                                className="text-decoration-none text-dark mx-2 my-auto"
                                to="/cart"
                            >
                                {" "}
                                <button className="cart rounded-pill px-3 py-1 text-light mx-2">
                                    <i className="fa-solid fa-cart-arrow-down"></i>
                                    
                                </button>{" "}
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;
