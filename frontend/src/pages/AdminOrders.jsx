import React, { useEffect, useState } from "react";


const AdminOrders = () => {


  const [orders, setOrders] = useState([]);



  useEffect(() => {

    fetchOrders();

  }, []);




  const fetchOrders = async () => {

    try {

      const token = localStorage.getItem("token");


      const response = await fetch(
        "https://velora-p3lg.onrender.com/api/orders/all",
        {
          headers:{
            Authorization:`Bearer ${token}`
          }
        }
      );


      const data = await response.json();

      setOrders(data);


    } catch(error){

      console.log(error);

    }

  };





  const updateStatus = async(id,status)=>{

    try{

      const token = localStorage.getItem("token");


      await fetch(

        `https://velora-p3lg.onrender.com/api/orders/${id}`,

        {
          method:"PUT",

          headers:{
            "Content-Type":"application/json",
            Authorization:`Bearer ${token}`
          },

          body:JSON.stringify({
            status
          })

        }

      );


      alert("Order Status Updated");

      fetchOrders();


    }
    catch(error){

      console.log(error);

    }

  };





  const deleteOrder = async(id)=>{

    try{

      const token = localStorage.getItem("token");


      await fetch(

        `https://velora-p3lg.onrender.com/api/orders/${id}`,

        {
          method:"DELETE",

          headers:{
            Authorization:`Bearer ${token}`
          }

        }

      );


      alert("Delivered Order Removed");


      fetchOrders();


    }
    catch(error){

      console.log(error);

    }

  };





  return (

    <div style={{padding:"30px"}}>


      <h1>🛒 All Orders</h1>


      <br/>


      {
        orders.length === 0 ? (

          <h3>No Orders Found</h3>

        )

        :

        (

          orders.map(order=>(


            <div

            key={order._id}

            style={{

              border:"1px solid #ddd",

              padding:"20px",

              marginBottom:"20px",

              borderRadius:"12px"

            }}

            >


              <h3>
                Order ID: {order._id}
              </h3>



              <p>
                <strong>Customer:</strong> {order.userId?.name}
              </p>



              <p>
                <strong>Email:</strong> {order.userId?.email}
              </p>



              <p>
                <strong>Total:</strong> ₹{order.total}
              </p>



              <p>
                <strong>Status:</strong>
              </p>




              <select

              value={order.status}

              onChange={(e)=>
                updateStatus(
                  order._id,
                  e.target.value
                )
              }

              >

                <option>Order Placed</option>

                <option>Packed</option>

                <option>Shipped</option>

                <option>Out for Delivery</option>

                <option>Delivered</option>


              </select>





              {
                order.status === "Delivered" && (

                  <button

                  onClick={()=>
                    deleteOrder(order._id)
                  }

                  style={{

                    marginTop:"15px",

                    marginLeft:"15px",

                    background:"#dc2626",

                    color:"white",

                    padding:"10px 20px",

                    border:"none",

                    borderRadius:"8px",

                    cursor:"pointer"

                  }}

                  >

                    Remove Order

                  </button>

                )
              }



            </div>


          ))

        )
      }


    </div>

  );

};


export default AdminOrders;