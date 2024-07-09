import React from 'react';

import  classes from './Navbar.module.css';
import {Link} from "react-router-dom";

const NavBar = () => {
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
                        <span>2</span>
                    </div>
                </div>

            </Link>

        </div>
    );
};

export default NavBar;