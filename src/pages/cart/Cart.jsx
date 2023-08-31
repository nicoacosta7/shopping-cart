import React, { useContext } from "react";
import './Cart.css'
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/Shop-context";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

function Cart () {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);

    const navigate = useNavigate();

    return (
        <div className="cart">
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className="cartItems">
                {PRODUCTS.map((prod) => {
                    if (cartItems[prod.id] !== 0) {
                        return <CartItem data={prod}/>
                    }
                })}
            </div>

            {getTotalCartAmount() > 0 ? (
            <div className="checkout">
                <p> Subtotal: ${getTotalCartAmount().toFixed(2)} </p>
                <button onClick={() => navigate("/")}> Continue Shopping </button>
                <button> Checkout </button>
            </div> )
            : (<p>Your cart is empty!</p>)}
        </div>
    )
}

export default Cart