import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { CartContext } from "../context/CartContext";
import { OrderContext } from "../context/OrderContext";

import "./Checkout.css";


const Checkout = () => {

  const { cart, setCart } = useContext(CartContext);

  const { addOrder } = useContext(OrderContext);

  const navigate = useNavigate();


  const [address, setAddress] = useState({
    name:"",
    phone:"",
    city:"",
    pincode:"",
    fullAddress:""
  });


  const [payment,setPayment] = useState("");


  const total = cart.reduce(
    (sum,item)=> sum + item.price * item.quantity,
    0
  );


  const placeOrder = async()=>{


    if(cart.length===0){
      alert("Your cart is empty");
      return;
    }


    if(
      !address.name ||
      !address.phone ||
      !address.city ||
      !address.pincode ||
      !address.fullAddress
    ){
      alert("Please fill delivery address");
      return;
    }


    if(payment===""){
      alert("Please select payment method");
      return;
    }


    const order = {

      products: cart.map(item=>({

        productId:item._id,
        name:item.name,
        price:item.price,
        quantity:item.quantity,
        image:item.image

      })),

      total,

      address,

      payment,

      deliveryDate:new Date(
        Date.now()+5*24*60*60*1000
      ),

      status:"Order Placed"

    };


    try {


      const token = localStorage.getItem("token");


      if(!token){

        alert("Please login again");

        navigate("/login");

        return;

      }


      const response = await axios.post(

        "https://velora-p3lg.onrender.com/api/orders",

        order,

        {
          headers:{
            Authorization:`Bearer ${token}`
          }
        }

      );


      const savedOrder = response.data.order || response.data;


      addOrder(savedOrder);


      setCart([]);


      navigate("/success",{

        state:{
          order:savedOrder
        }

      });


    } catch(error){


      console.log(
        "ORDER ERROR:",
        error.response?.data || error.message
      );


      alert("Order failed");


    }


  };



  return (

    <div className="checkout-page">

      <h1>🛍️ Checkout</h1>


      <div className="checkout-box">


        <h2>📍 Delivery Address</h2>


        <input
          placeholder="Full Name"
          value={address.name}
          onChange={(e)=>setAddress({...address,name:e.target.value})}
        />


        <input
          placeholder="Phone Number"
          value={address.phone}
          onChange={(e)=>setAddress({...address,phone:e.target.value})}
        />


        <input
          placeholder="City"
          value={address.city}
          onChange={(e)=>setAddress({...address,city:e.target.value})}
        />


        <input
          placeholder="Pincode"
          value={address.pincode}
          onChange={(e)=>setAddress({...address,pincode:e.target.value})}
        />


        <textarea
          placeholder="Full Address"
          value={address.fullAddress}
          onChange={(e)=>setAddress({...address,fullAddress:e.target.value})}
        />



        <h2>💳 Payment Method</h2>


        <label>

          <input
            type="radio"
            name="payment"
            value="COD"
            onChange={(e)=>setPayment(e.target.value)}
          />

          Cash on Delivery

        </label>


        <br/>


        <label>

          <input
            type="radio"
            name="payment"
            value="UPI"
            onChange={(e)=>setPayment(e.target.value)}
          />

          UPI Payment

        </label>



        <h2>🛒 Order Summary</h2>


        {
          cart.map(item=>(

            <p key={item._id}>

              {item.name} × {item.quantity}
              {" = "}
              ₹{item.price * item.quantity}

            </p>

          ))
        }


        <h2>
          Total: ₹{total}
        </h2>



        <button
          className="place-order"
          onClick={placeOrder}
        >

          Place Order

        </button>


      </div>

    </div>

  );

};


export default Checkout;