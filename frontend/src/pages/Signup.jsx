import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { AuthContext } from "../context/AuthContext";

import "./Signup.css";

const Signup = () => {

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSignup = async (e) => {

    e.preventDefault();


    if (!name || !email || !password) {
      alert("Please fill all details");
      return;
    }


    try {

      const response = await axios.post(
        "https://velora-p3lg.onrender.com/api/users/signup",
        {
          name,
          email,
          password,
        }
      );


      // Save complete login data (user + token)
      login(response.data);


      alert(response.data.message || "Signup Successful");


      navigate("/");


    } catch (error) {

      alert(
        error.response?.data?.message || "Signup Failed"
      );

    }

  };


  return (

    <div className="signup-page">

      <div className="signup-card">

        <h1>🛍️ Velora</h1>

        <h2>Create Account</h2>

        <p>Join Velora and start shopping</p>


        <form onSubmit={handleSignup}>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />


          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />


          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />


          <button type="submit">
            Create Account
          </button>


        </form>


        <p className="login-text">

          Already have an account?{" "}

          <a href="/login">
            Login
          </a>

        </p>


      </div>

    </div>

  );

};


export default Signup;