import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <h2>🛍️ Velora</h2>
        <p>Your Premium Shopping Destination</p>

        <div className="footer-links">

          <Link to="/">Home</Link>

          <Link to="/">Products</Link>

          <Link to="/cart">Cart</Link>

          <Link to="/account">Account</Link>

        </div>

        <p className="copyright">
          © 2026 Velora. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;