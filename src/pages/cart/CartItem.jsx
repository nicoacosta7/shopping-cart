import React from "react";
import { useContext } from "react";
import { ShopContext } from "../../context/Shop-context";

function CartItem (props) {
    const {id, productName, price, productImage} = props.data;

    const { cartItems, addToCart, removeFromCart, updateCartItemCount  } = useContext(ShopContext);

    const cartItemAmount = cartItems[id];

    return (
        <div className="cartItem">
            <img src={productImage}></img>
            <div className="description">
                <p>{productName}</p>
                <p>${price}</p>
                <div className="countHandler">
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input value={cartItemAmount} onChange={(e) => updateCartItemCount(id, Number(e.target.value))}/>
                    <button onClick={() => addToCart(id)}> + </button>
                </div>
            </div>
        </div>
    )
}

export default CartItem