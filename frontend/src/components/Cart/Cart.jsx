import React, {useEffect} from 'react';

import classes from './Cart.module.css';

import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {addToCart, clearCart, decreaseFromCart, removeFromCart,getTodos} from "../../redux/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    useEffect(() => {
        dispatch(getTodos());
    }, [cart,dispatch]);

    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product));
    }
    const handleDecreaseCart = (product) => {
        dispatch(decreaseFromCart(product));
    }
    const handleIncreaseQuantity = (product) => {
        dispatch(addToCart(product));
    }
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div>
            <div className={classes.cart}>
                Корзина
                {cart.cartItems.length === 0 ? (
                    <div className={classes.cart_null}>
                        <p>Корзина пуста</p>
                        <div>
                            <Link to="/">
                                Назад
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className={classes.cart}>
                        <div className={classes.title}>
                            <p>Продукт</p>
                            <p>Цена</p>
                            <p>Количество</p>
                            <p  className={classes.items_bottom}>Все</p>
                        </div>
                        <div>
                            {cart.cartItems?.map((item) => (

                                <div key={item.id} className={classes.items}>
                                    <div className={classes.items_description}>
                                        <img src={item.image} alt={item.name} width={150}/>
                                        <div className={classes.descr}>
                                            <div>{item.name}</div>
                                            <div className={classes.description}>{item.description}</div>
                                            <button onClick={()=> handleRemoveFromCart(item)}>Delete</button>
                                        </div>
                                    </div>

                                    <div>
                                        {item.price} Р
                                    </div>

                                    <div className={classes.button_add}>
                                        <button onClick={()=>{handleDecreaseCart(item)}}>-</button>
                                        <div>{item.cartQuantity}</div>
                                        <button onClick={()=>{handleIncreaseQuantity(item)}}>+</button>
                                    </div>

                                    <div className={classes.items_bottom}>
                                        {item.price * item.cartQuantity} Р
                                    </div>

                                </div>

                            ))}
                        </div>
                        <div className={classes.cart_bottom}>
                            <div>
                                <button onClick={()=>{handleClearCart()}} className={classes.cart_bottom_button}>
                                    Убрать товары
                                </button>
                            </div>

                            <div>
                                <div className={classes.prisces}>
                                    <p>Конечна цена</p>
                                    <p>{cart.cartTotalAmount}</p>
                                </div>
                                <button className={classes.cart_bottom_button}>Оформить заказ</button>
                            </div>

                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;