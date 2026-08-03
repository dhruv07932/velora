import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar
} from "recharts";

import "./Admin.css";


const Admin = () => {


  const navigate = useNavigate();



  const [stats, setStats] = useState({

    totalUsers:0,
    totalProducts:0,
    totalOrders:0,
    totalRevenue:0

  });



  useEffect(()=>{


    const fetchDashboard = async()=>{


      try{


        const token = localStorage.getItem("token");


        const response = await fetch(

          "http://localhost:5000/api/admin/dashboard",

          {
            headers:{
              Authorization:`Bearer ${token}`
            }
          }

        );


        const data = await response.json();


        setStats(data);


      }
      catch(error){

        console.log(error);

      }


    };


    fetchDashboard();


  },[]);





  const salesData = [

    {month:"Jan", sales:12000},
    {month:"Feb", sales:18000},
    {month:"Mar", sales:15000},
    {month:"Apr", sales:26000},
    {month:"May", sales:32000},
    {month:"Jun", sales:45000}

  ];




  const orderData = [

    {name:"Placed", value:25},
    {name:"Packed", value:18},
    {name:"Shipped", value:10},
    {name:"Delivered", value:45}

  ];




  return (

    <div className="admin-page">


      <h1 className="admin-title">
        🛠️ Velora Admin Dashboard
      </h1>


      <p className="admin-subtitle">
        Welcome Admin! Manage your complete store from one place.
      </p>





      <div className="admin-cards">


        <div className="admin-card">

          <h2>
            {stats.totalProducts}
          </h2>

          <p>
            📦 Total Products
          </p>

        </div>





        <div className="admin-card">

          <h2>
            {stats.totalOrders}
          </h2>

          <p>
            🛒 Total Orders
          </p>

        </div>





        <div className="admin-card">

          <h2>
            {stats.totalUsers}
          </h2>

          <p>
            👥 Total Users
          </p>

        </div>





        <div className="admin-card">

          <h2>
            ₹{stats.totalRevenue}
          </h2>

          <p>
            💰 Total Revenue
          </p>

        </div>


      </div>






      <div className="charts-container">



        <div className="chart-box">


          <h2>
            📈 Monthly Sales
          </h2>


          <ResponsiveContainer width="100%" height={300}>


            <LineChart data={salesData}>

              <CartesianGrid />

              <XAxis dataKey="month"/>

              <YAxis/>

              <Tooltip/>


              <Line
                type="monotone"
                dataKey="sales"
                strokeWidth={3}
              />


            </LineChart>


          </ResponsiveContainer>


        </div>






        <div className="chart-box">


          <h2>
            📊 Order Status
          </h2>


          <ResponsiveContainer width="100%" height={300}>


            <BarChart data={orderData}>


              <CartesianGrid/>


              <XAxis dataKey="name"/>


              <YAxis/>


              <Tooltip/>


              <Bar dataKey="value"/>


            </BarChart>


          </ResponsiveContainer>


        </div>



      </div>






      <div className="admin-actions">


        <div
          className="action-box"
          onClick={()=>navigate("/admin/add-product")}
        >

          <h3>
            ➕ Add Product
          </h3>

          <p>
            Add new products to your store.
          </p>

        </div>





        <div
          className="action-box"
          onClick={()=>navigate("/admin/products")}
        >

          <h3>
            📦 Manage Products
          </h3>

          <p>
            Edit or delete products.
          </p>

        </div>





        <div
          className="action-box"
          onClick={()=>navigate("/admin/orders")}
        >

          <h3>
            🛒 Orders
          </h3>

          <p>
            Manage customer orders.
          </p>

        </div>





        <div
          className="action-box"
          onClick={()=>navigate("/admin/users")}
        >

          <h3>
            👥 Users
          </h3>

          <p>
            Manage registered users.
          </p>

        </div>



      </div>



    </div>

  );

};


export default Admin;