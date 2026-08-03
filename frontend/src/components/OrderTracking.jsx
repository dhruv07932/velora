import React from "react";
import "./OrderTracking.css";

const OrderTracking = () => {

  return (

    <div className="tracking-page">

      <div className="tracking-card">

        <h1>Track Your Order</h1>

        <p className="order-number">
          Order ID: #895046
        </p>


        <div className="timeline">


          <div className="step active">

            <div className="circle">
              ✓
            </div>

            <div>
              <h3>Order Placed</h3>
              <p>Your order has been confirmed</p>
            </div>

          </div>



          <div className="line"></div>



          <div className="step active">

            <div className="circle">
              ✓
            </div>

            <div>
              <h3>Shipped</h3>
              <p>Your product is on the way</p>
            </div>

          </div>



          <div className="line"></div>



          <div className="step">

            <div className="circle">
              3
            </div>

            <div>
              <h3>Out for Delivery</h3>
              <p>Delivery partner will reach soon</p>
            </div>

          </div>



          <div className="line"></div>



          <div className="step">

            <div className="circle">
              4
            </div>

            <div>
              <h3>Delivered</h3>
              <p>Your order will be delivered</p>
            </div>

          </div>


        </div>


      </div>


    </div>

  );
};


export default OrderTracking;