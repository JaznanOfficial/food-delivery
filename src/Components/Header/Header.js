import React from "react";

import heroPizza from "../../img/hero-pizza.png";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="container d-lg-flex flex-row justify-content-between align-items-center py-5">
                <div>
                    <div>
                        <h3>Are You Hungry?</h3>
                        <h1>Don't Wait!</h1>
                        <button className="cart rounded-pill px-3 py-1 text-light mx-2 fs-5 fw-bold">
                            Order Now
                        </button>
                    </div>
                </div>
                <div>
                    <img src={heroPizza} alt="img not found" width={"500px"} />
                </div>
            </div>
        </div>
    );
};

export default Header;
