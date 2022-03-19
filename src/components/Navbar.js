import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="menu">
        <Link to="/" className="menu-item">
          Home
        </Link>
        <Link to="/" className="menu-item">
          Food Menu
        </Link>
        <Link to="/" className="menu-item">
          About Us
        </Link>
        <Link to="/" className="menu-item">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
