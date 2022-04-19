import React from "react";

import heroPizza from "../../img/hero-pizza.png";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="container d-lg-flex flex-row justify-content-around align-items-center">
                <div>
                    <div>
                        <h3>Are You Hungry?</h3>
                        <h1>Don't Wait!</h1>
                        <button className="cart rounded-pill px-3 py-1 text-light mx-2 fs-5 fw-bold">
                            Order Now
                        </button>
                    </div>
                </div>
                <div className="header-img d-flex justify-content-center align-items-center">
                    <img src={heroPizza} alt="img not found" />
                </div>
            </div>
        </div>
    );
};

export default Header;
