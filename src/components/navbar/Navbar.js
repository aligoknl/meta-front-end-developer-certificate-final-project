import React from "react";
import "./HeaderElement.css";
import Logo from "../assets/logo.jpg";
import Navigation from "./Navigation";
import { NavLink } from "react-router-dom";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="image-wrapper">
          <NavLink to="/">
            {<img className="logo-img" src={Logo} alt="Little Lemon logo" />}
          </NavLink>
        </div>
        <Navigation />
        <MobileNav />
      </div>
    </div>
  );
};

export default Navbar;
