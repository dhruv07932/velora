import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

import "./Account.css";


const Account = () => {


    const { user, logout } = useContext(AuthContext);

    const navigate = useNavigate();



    const handleLogout = ()=>{

        logout();

        navigate("/login");

    };



    if(!user){

        return (

            <div className="account-page">

                <div className="account-card">

                    <h1>
                        🛍️ Velora
                    </h1>

                    <h2>
                        Please Login
                    </h2>


                    <Link to="/login">

                        <button>
                            Login
                        </button>

                    </Link>


                </div>

            </div>

        );

    }



    return (

        <div className="account-page">


            <div className="account-card">


                <h1>
                    👤 My Account
                </h1>



                <h2>
                    Hello, {user.name}
                </h2>



                <p>
                    📧 {user.email}
                </p>



                <Link to="/orders">

                    <button>
                        📦 My Orders
                    </button>

                </Link>



                <Link to="/wishlist">

                    <button>
                        ❤️ My Wishlist
                    </button>

                </Link>



                <Link to="/cart">

                    <button>
                        🛒 My Cart
                    </button>

                </Link>




                <button 
                className="logout"
                onClick={handleLogout}
                >

                    Logout

                </button>



            </div>


        </div>

    );

};


export default Account;