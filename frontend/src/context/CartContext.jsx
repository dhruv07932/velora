import React, { createContext, useState } from "react";

export const CartContext = createContext();


const CartProvider = ({children}) => {


    const [cart, setCart] = useState([]);



    const addToCart = (product) => {

        const exist = cart.find(
            item => item._id === product._id
        );


        if(exist){

            setCart(
                cart.map(item =>
                    item._id === product._id
                    ?
                    {
                        ...item,
                        quantity:item.quantity + 1
                    }
                    :
                    item
                )
            );

        }
        else{

            setCart([
                ...cart,
                {
                    ...product,
                    quantity:1
                }
            ]);

        }

    };



    const removeFromCart = (id) => {

        setCart(
            cart.filter(item => item._id !== id)
        );

    };



    const increase = (id) => {

        setCart(
            cart.map(item =>
                item._id === id
                ?
                {
                    ...item,
                    quantity:item.quantity + 1
                }
                :
                item
            )
        );

    };



    const decrease = (id) => {

        setCart(
            cart.map(item =>
                item._id === id && item.quantity > 1
                ?
                {
                    ...item,
                    quantity:item.quantity - 1
                }
                :
                item
            )
        );

    };



    const totalPrice = cart.reduce(
        (total,item)=>
        total + item.price * item.quantity,
        0
    );



    return (

        <CartContext.Provider

            value={{
                cart,
                setCart,
                addToCart,
                removeFromCart,
                increase,
                decrease,
                totalPrice
            }}

        >

            {children}

        </CartContext.Provider>

    );

};


export default CartProvider;