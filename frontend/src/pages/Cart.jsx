import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./Cart.css";


const Cart = () => {

    const navigate = useNavigate();


    const {
        cart,
        increase,
        decrease,
        removeFromCart,
        totalPrice

    } = useContext(CartContext);



    return (

        <div className="cart-page">


            <h1>
                🛒 Your Cart
            </h1>



            {
                cart.length === 0 ? (

                    <div className="empty-cart">

                        <h2>
                            Your cart is empty
                        </h2>

                        <p>
                            Add products to continue shopping
                        </p>

                    </div>

                )

                :

                (

                    <>


                    <div className="cart-container">


                    {
                        cart.map(item => (

                            <div 
                            className="cart-item"
                            key={item._id}
                            >


                                <img 
                                src={item.image}
                                alt={item.name}
                                />



                                <div className="cart-details">


                                    <h2>
                                        {item.name}
                                    </h2>


                                    <p>
                                        Price: ₹{item.price}
                                    </p>



                                    <div className="quantity">


                                        <button
                                        onClick={() => decrease(item._id)}
                                        >
                                            -
                                        </button>


                                        <span>
                                            {item.quantity}
                                        </span>


                                        <button
                                        onClick={() => increase(item._id)}
                                        >
                                            +
                                        </button>


                                    </div>



                                    <button
                                    className="remove-btn"
                                    onClick={() => removeFromCart(item._id)}
                                    >
                                        Remove
                                    </button>


                                </div>


                            </div>

                        ))
                    }


                    </div>



                    <div className="cart-total">

                        <h2>
                            Subtotal: ₹{totalPrice}
                        </h2>


                        <button
                        onClick={() => navigate("/checkout")}
                        >
                            Proceed to Checkout
                        </button>


                    </div>


                    </>

                )

            }


        </div>

    );

};


export default Cart;