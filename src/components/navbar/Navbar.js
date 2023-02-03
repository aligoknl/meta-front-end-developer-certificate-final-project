import React from "react";
import "./Navbar.css";
import Logo from "../assets/logo.jpg";
import DesktopNavbar from "./DesktopNavbar";
import { NavLink } from "react-router-dom";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-wrapper">
        <div className="image-wrapper">
          <NavLink to="/">
            {<img className="logo-img" src={Logo} alt="Little Lemon logo" />}
          </NavLink>
        </div>
        <DesktopNavbar />
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
