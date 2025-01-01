import React from "react";
import "./NavBar.css";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/Home">Shopping</a>
      </div>
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search for products..."
          className="search-input"
        />
        <button className="search-button">Search</button>
      </div>
      <div className="navbar-links">
        <a href="/Home">Home</a>
        <a href="/Products">Products</a>
        <a href="/Offers">Hot Offers</a>
        <a href="/Contact">Contact</a>
      </div>
      <div className="navbar-cart">
        <FaShoppingCart size={24} />
        <span className="cart-count">3</span>
      </div>
    </nav>
  );
};

export default NavBar;

