import React from 'react';
import {productsApi, useGetAllProductsQuery} from "../../redux/prodictsApi";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import classes from "./Home.module.css";
import {addToCart, getTodos} from "../../redux/cartSlice";

const Home = () => {
    const navigate = useNavigate();

    const {items,status} = useSelector(state => state.products);
    const {data,error,isLoading} = useGetAllProductsQuery()

    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        dispatch(getTodos())
    }

    return (
        <div className={classes.home}>
            {isLoading
                ? <p>Loading</p>
                : error
                    ? <p>An error</p>
                    :(
                        <>
                            <h2>New Arrivals</h2>
                            <div className={classes.products}>
                                {data?.map((product) => (
                                    <div key={product.id}>
                                        <h3>{product.name}</h3>
                                        <img src={product.image} alt={product.name} width="200px"/>
                                        <div className={classes.description}>
                                            <span className={classes.description_span}>{product.description}</span>
                                            <span>{product.price}</span>
                                        </div>
                                        <button onClick={()=>handleAddToCart(product)}>Add To Cart</button>
                                    </div>
                                ))}
                            </div>
                        </>
                    )
            }
        </div>
    );
};

export default Home;