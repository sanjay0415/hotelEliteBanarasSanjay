import React from "react";
import { NavLink } from "react-router-dom";
import "./menu.css";

function Menu() {
  return (
    <>
      <div className="navbar">
        <NavLink to="/" className="navRoute">
          Home
        </NavLink>
        <NavLink to="/About" className="navRoute">
          About
        </NavLink>
        <NavLink to="/Items" className="navRoute">
          Items
        </NavLink>
        <NavLink to="Booking" className="navRoute">
          Booking
        </NavLink>
      </div>
    </>
  );
}

export default Menu;
