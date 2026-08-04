import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./OrderSuccess.css";

const OrderSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const order = location.state?.order;

  if (!order) {
    return (
      <div className="success-page">
        <div className="success-box">
          <h2>No Order Found</h2>

          <Link to="/">
            <button>Go Home</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="success-page">
      <div className="success-box">
        <h1>✅ Order Placed Successfully!</h1>

        <h2>Thank you for shopping with Velora 🛍️</h2>

        <p>
          Your Order ID: <b>#{order._id}</b>
        </p>

        <p>Your product will be delivered soon.</p>

        <button
          onClick={() => navigate(`/track-order/${order._id}`)}
        >
          Track Order
        </button>

        <Link to="/">
          <button>Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;