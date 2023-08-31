import React, { createContext, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = PRODUCTS.find((product) => product.id == Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    }

    const addToCart = (id) => {
        setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }))
    }

    const removeFromCart = (id) => {
        setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }))
    }

    const updateCartItemCount = (id, val) => {
        setCartItems((prev) => ({...prev, [id] : val}))
    }


    const contextValues = { cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount }

    return <ShopContext.Provider value={contextValues}>{props.children}</ShopContext.Provider>
}
