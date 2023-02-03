import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const NavLinks = (props) => {
  const animateFrom = { opacity: 0, y: -20 };
  const animateTo = { opacity: 1, y: 0 };
  const links = [
    {
      id: 1,
      to: "/",
      linkName: "Home",
    },
    {
      id: 2,
      to: "/",
      linkName: "About",
    },
    {
      id: 3,
      to: "/",
      linkName: "Menu",
    },
    {
      id: 4,
      to: "/reservations",
      linkName: "Reservations",
    },
    {
      id: 5,
      to: "/",
      linkName: "Order Online",
    },
    {
      id: 6,
      to: "/",
      linkName: "Login",
    },
  ];

  return (
    <motion.ul className="menu-items">
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.05 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        {links.map((item) => (
          <NavLink to={item.to} className="links" key={item.id}>
            {item.linkName}
          </NavLink>
        ))}
      </motion.li>
    </motion.ul>
  );
};

export default NavLinks;
