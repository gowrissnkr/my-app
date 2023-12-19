import React from "react";
import "./checkout.css"


function Checkout(props) {
    const { cartProduct } = props

    return (
        <>
            <section id="cart">
                <h1>Checkout Page</h1>
                <div className="cart-container">
                    <div className="left-side">
                        <p>Total Items: <span id="number-of-item">{cartProduct.length}</span></p>
                        {cartProduct.length > 0 ? cartProduct.map((product) => {
                            return (
                                <div className="cart-items" id="cart-item-container">
                                    <div className="item">
                                        <img src={product.imageURL} />
                                        <div className="detail">
                                            <h3>{product.name}</h3>
                                            <p>x1</p><p>Amount: 2599</p></div>
                                    </div>
                                </div>
                            )
                        }) : ""
                        }
                        <div className="right-side">
                            <div className="total-amount">
                                <h2>Total Amount</h2>
                                <p>Total Amount: Rs <span id="total-amount"></span></p>
                            </div>
                        </div>
                    </div>
                    </div>
            </section>
        </>
    )
}

export default Checkout;