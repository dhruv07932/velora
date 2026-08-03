import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";


import CartProvider from "./context/CartContext";
import SearchProvider from "./context/SearchContext";
import WishlistProvider from "./context/WishlistContext";
import OrderProvider from "./context/OrderContext";
import AuthProvider from "./context/AuthContext";



createRoot(document.getElementById("root")).render(


    <StrictMode>


        <AuthProvider>


            <SearchProvider>


                <WishlistProvider>


                    <CartProvider>


                        <OrderProvider>


                            <App />


                        </OrderProvider>


                    </CartProvider>


                </WishlistProvider>


            </SearchProvider>


        </AuthProvider>


    </StrictMode>


);