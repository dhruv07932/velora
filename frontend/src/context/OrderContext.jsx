import React, { createContext, useEffect, useState } from "react";
import axios from "axios";


export const OrderContext = createContext();


const OrderProvider = ({ children }) => {

    const [orders, setOrders] = useState([]);


    const fetchOrders = async () => {

        try {

            const token = localStorage.getItem("token");

            if (!token) {
                return;
            }


            const response = await axios.get(
                "https://velora-p3lg.onrender.com/api/orders",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );


            setOrders(response.data);


        } catch (error) {

            console.log(error);

        }

    };



    useEffect(() => {

        fetchOrders();

    }, []);



    const addOrder = (order) => {

        setOrders(prev => [
            ...prev,
            order
        ]);

    };



    return (

        <OrderContext.Provider
            value={{
                orders,
                addOrder,
                fetchOrders
            }}
        >

            {children}

        </OrderContext.Provider>

    );

};


export default OrderProvider;