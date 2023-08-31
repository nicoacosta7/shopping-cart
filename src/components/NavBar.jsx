import { Plus, ShoppingCart } from "phosphor-react";
import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

function NavBar () {
    return(
        <header className="navbar">
            <nav className="links">
                <Link to='/'>Shop</Link>
                <Link to='/cart'>
                    <ShoppingCart size={32}/>
                </Link>
                <Link to='/add-item'>
                    <Plus size={32}/>
                </Link>
            </nav>
        </header>
    )
}

export default NavBar