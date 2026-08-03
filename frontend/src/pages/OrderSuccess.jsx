import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./OrderSuccess.css";

const OrderSuccess = () => {

    const navigate = useNavigate();

    const orderId = Math.floor(
        Math.random() * 1000000
    );


    return (

        <div className="success-page">


            <div className="success-box">


                <h1>
                    ✅ Order Placed Successfully!
                </h1>


                <h2>
                    Thank you for shopping with Velora 🛍️
                </h2>


                <p>
                    Your Order ID:
                    <b> #{orderId}</b>
                </p>


                <p>
                    Your product will be delivered soon.
                </p>


                <button
                    onClick={() => navigate("/track-order")}
                >
                    Track Order
                </button>


                <Link to="/">

                    <button>
                        Continue Shopping
                    </button>

                </Link>


            </div>


        </div>

    );

};


export default OrderSuccess;