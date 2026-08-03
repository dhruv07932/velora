import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { OrderContext } from "../context/OrderContext";
import "./Orders.css";


const Orders = () => {


    const { orders } = useContext(OrderContext);



    return (

        <div className="orders-page">


            <h1>
                📦 My Orders
            </h1>



            {
                orders.length === 0 ? (

                    <h2>
                        No orders yet
                    </h2>

                ) : (


                    orders.map(order => (

                        <div
                            className="order-card"
                            key={order._id}
                        >


                            <h2>
                                Order ID: #{order._id}
                            </h2>


                            <p>
                                Date: {new Date(order.date).toLocaleDateString()}
                            </p>


                            <p>
                                Status: 🚚 {order.status}
                            </p>



                            <h3>
                                Products
                            </h3>



                            {
                                order.products.map((item, index) => (

                                    <div
                                        className="order-product"
                                        key={index}
                                    >


                                        <img
                                            src={item.image}
                                            alt={item.name}
                                        />


                                        <div>

                                            <h3>
                                                {item.name}
                                            </h3>


                                            <p>
                                                Quantity: {item.quantity}
                                            </p>


                                            <p>
                                                Price: ₹{item.price}
                                            </p>

                                        </div>


                                    </div>

                                ))
                            }




                            <h2>
                                Total: ₹{order.total}
                            </h2>


                            <p>
                                Payment: {order.payment}
                            </p>



                            <Link to={`/track-order/${order._id}`}>

                                <button className="track-btn">
                                    Track Order
                                </button>

                            </Link>



                        </div>


                    ))

                )
            }


        </div>

    );

};


export default Orders;