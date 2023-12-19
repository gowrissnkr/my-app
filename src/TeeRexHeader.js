import React from "react";
import { Link } from "react-router-dom";
import Checkout from "./Checkout";
import "./Header.css"

function TeeRexHeader(props) {
    const { count } = props


    return (
         
        <nav>
            <div id="top-bar">
                {/* Logo */}
                <div className="logo">
                    <h4><span>Tee</span>Rex</h4>
                </div>
                {/* Icon */}
                <div className="icons">
                    {/* Menu Items */}
                    <Link to="/">
                        <ul className="nav-links">
                            <li key={1}>Products</li>
                        </ul>
                    </Link>
                    <div className="cart" id="cartIcon">

                    <Link to = "./checkout">
                         <i className="fa fa-shopping-cart">
                            <span id="cart-count">{count}</span>
                        </i>
                        </Link>
                      
                    </div>
                </div >
            </div>
        </nav>
         
    )
}

export default TeeRexHeader