import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { CartContext } from "../context/CartContext";
import { SearchContext } from "../context/SearchContext";
import { AuthContext } from "../context/AuthContext";

import "./Navbar.css";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const { search, setSearch } = useContext(SearchContext);
  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleLogout = () => {
    logout();
    alert("Logged out successfully");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="logo">
        🛍️ Velora
      </Link>

      {/* Search */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>🔍</button>
      </div>

      {/* Navigation */}
      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/wishlist">❤️ Wishlist</Link>

        <Link to="/orders">📦 Orders</Link>

        {/* Show only for Admin */}
        {user && user.role === "admin" && (
          <Link to="/admin">🛠️ Admin</Link>
        )}

        <Link to="/cart">
          🛒 Cart ({cartCount})
        </Link>

        {user ? (
          <div className="user-box">
            <span>👤 Hello, {user.name}</span>

            <button onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;