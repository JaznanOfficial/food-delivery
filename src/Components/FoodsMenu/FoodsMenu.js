import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import Breakfast from "../Breakfast/Breakfast";
import Dinner from "../Dinner/Dinner";
import Lunch from "../Lunch/Lunch";
import "./FoodsMenu.css";

const FoodsMenu = () => {
    return (
        <div className="food-menu">
            <Navbar variant="light my-3">
                <Container>
                    <Nav className="mx-auto">
                        <Link
                            className="text-decoration-none text-dark mx-2 my-auto fs-5"
                            to="/home/breakfast"
                        >
                            Breakfast
                        </Link>
                        <Link
                            className="text-decoration-none text-dark mx-2 my-auto fs-5"
                            to="/home/lunch"
                        >
                            Lunch
                        </Link>
                        <Link
                            className="text-decoration-none text-dark mx-2 my-auto fs-5"
                            to="/home/dinner"
                        >
                            Dinner
                        </Link>
                    </Nav>
                </Container>
            </Navbar>

            <Routes>
            <Route path="breakfast" element={<Breakfast/>}></Route>
            </Routes>
            <Routes>
            <Route path="lunch" element={<Lunch/>}></Route>
            </Routes>
            <Routes>
            <Route path="dinner" element={<Dinner/>}></Route>
            </Routes>
        </div>
    );
};

export default FoodsMenu;
