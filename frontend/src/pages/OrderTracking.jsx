import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./OrderTracking.css";


const OrderTracking = () => {


    const { id } = useParams();

    const [order,setOrder] = useState(null);



    useEffect(()=>{


        const fetchOrder = async()=>{


            try{


                const token = localStorage.getItem("token");


                const response = await fetch(

                    `https://velora-p3lg.onrender.com/api/orders/${id}`,

                    {
                        headers:{
                            Authorization:`Bearer ${token}`
                        }
                    }

                );


                const data = await response.json();


                setOrder(data);


            }
            catch(error){

                console.log(error);

            }


        };


        fetchOrder();


    },[id]);






    const steps=[

        {
            title:"Order Placed",
            desc:"Your order has been confirmed",
            icon:"✓"
        },

        {
            title:"Packed",
            desc:"Your items have been packed safely",
            icon:"📦"
        },

        {
            title:"Shipped",
            desc:"Your package is on the way",
            icon:"🚚"
        },

        {
            title:"Out for Delivery",
            desc:"Delivery partner is near your location",
            icon:"🏍️"
        },

        {
            title:"Delivered",
            desc:"Your order has been delivered successfully",
            icon:"🎉"
        }

    ];




    if(!order){

        return(

            <h2 className="loading">
                Loading Order...
            </h2>

        );

    }





    const currentStatus = order.status || "Order Placed";


    const activeIndex = steps.findIndex(

        step=>step.title===currentStatus

    );





    return(

        <div className="tracking-page">


            <div className="tracking-card">



                <div className="tracking-header">


                    <h1>
                        🚚 Track Your Order
                    </h1>


                    <p>
                        Order ID: #{id}
                    </p>


                    <span>
                        ✅ {currentStatus}
                    </span>


                </div>





                {/* PRODUCT DETAILS */}


                <div className="tracking-box">


                    <h2>
                        📦 Product Details
                    </h2>


                    {
                        order.products.map((item,index)=>(

                            <div 
                            className="product-track"
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


                </div>






                {/* DELIVERY DETAILS */}


                <div className="tracking-box">


                    <h2>
                        📍 Delivery Details
                    </h2>



                    <p>
                        <b>Name:</b> {order.address?.name}
                    </p>


                    <p>
                        <b>Phone:</b> {order.address?.phone}
                    </p>


                    <p>
                        <b>Address:</b> {order.address?.fullAddress}
                    </p>


                    <p>
                        <b>City:</b> {order.address?.city}
                    </p>


                    <p>
                        <b>Pincode:</b> {order.address?.pincode}
                    </p>



                </div>






                {/* DELIVERY DATE */}


                <div className="tracking-box">


                    <h2>
                        📅 Expected Delivery
                    </h2>


                    <p>

                    {
                        order.deliveryDate
                        ?
                        new Date(order.deliveryDate)
                        .toDateString()
                        :
                        "5-7 Days"
                    }

                    </p>


                </div>







                {/* TIMELINE */}



                <div className="timeline">


                {
                    steps.map((step,index)=>(


                        <div
                        className="tracking-step"
                        key={index}
                        >



                            <div

                            className={
                                index<=activeIndex
                                ?
                                "icon-box active"
                                :
                                "icon-box"
                            }

                            >

                                {step.icon}

                            </div>





                            <div className="step-info">


                                <h3>
                                    {step.title}
                                </h3>


                                <p>
                                    {step.desc}
                                </p>


                            </div>




                            {
                                index !== steps.length-1 &&


                                <div

                                className={
                                    index<activeIndex
                                    ?
                                    "progress-line active"
                                    :
                                    "progress-line"
                                }

                                >

                                </div>


                            }



                        </div>


                    ))
                }


                </div>




            </div>


        </div>


    );

};


export default OrderTracking;