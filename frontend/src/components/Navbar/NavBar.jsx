import React, {useState} from 'react';

import  classes from './Navbar.module.css';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const NavBar = () => {
    const {cartTotalQuantity} = useSelector((state) => state.cart);
    return (
        <div className={classes.container}>
            <Link to="/">
                <div>Магазин</div>
            </Link>
            <Link to="/cart">
                <div className={classes.nav_bar}>
                    <div>
                        Корзина
                    </div>
                    <div className={classes.bag}>
                        <span>{cartTotalQuantity}</span>
                    </div>
                </div>

            </Link>

        </div>
    );
};

export default NavBar;