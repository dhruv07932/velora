import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductDetails from "./pages/ProductDetails";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Orders from "./pages/Orders";
import Account from "./pages/Account";
import OrderTracking from "./pages/OrderTracking";
import NotFound from "./pages/NotFound";

import Admin from "./pages/Admin";
import AddProduct from "./pages/AddProduct";
import ManageProducts from "./pages/ManageProducts";
import EditProduct from "./pages/EditProduct";
import AdminOrders from "./pages/AdminOrders";
import AdminUsers from "./pages/AdminUsers";

import AdminRoute from "./components/AdminRoute";

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>

          {/* User Routes */}

          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<OrderSuccess />} />
          <Route path="/orders" element={<Orders />} />

          <Route
            path="/track-order/:id"
            element={<OrderTracking />}
          />

          <Route path="/account" element={<Account />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route
            path="/product/:id"
            element={<ProductDetails />}
          />

          {/* Admin Routes */}

          <Route
            path="/admin"
            element={
              <AdminRoute>
                <Admin />
              </AdminRoute>
            }
          />

          <Route
            path="/admin/add-product"
            element={
              <AdminRoute>
                <AddProduct />
              </AdminRoute>
            }
          />

          <Route
            path="/admin/products"
            element={
              <AdminRoute>
                <ManageProducts />
              </AdminRoute>
            }
          />

          <Route
            path="/admin/edit-product/:id"
            element={
              <AdminRoute>
                <EditProduct />
              </AdminRoute>
            }
          />

          <Route
            path="/admin/orders"
            element={
              <AdminRoute>
                <AdminOrders />
              </AdminRoute>
            }
          />

          <Route
            path="/admin/users"
            element={
              <AdminRoute>
                <AdminUsers />
              </AdminRoute>
            }
          />

          {/* 404 Route */}

          <Route path="*" element={<NotFound />} />

        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;