import React from "react";
import './Shop.css'
import { PRODUCTS } from "../../products";
import Product from "./Product";

function Shop () {
    
    return(
        <div className="shop">
            <div className="shop-title">
                <h1></h1>
            </div>
            <div className="products">
                {PRODUCTS.map((p) => <Product data={p}/>)}
            </div>
        </div>
    )
}

export default Shop