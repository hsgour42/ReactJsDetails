import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";

function Navbar(props) {
  return (
    <div>
      <NavLink
        to="/"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "" };
        }}
      >
        Home
      </NavLink>
      ||
      <NavLink
        to="/about"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "" };
        }}
      >
        About us
      </NavLink>
      ||
      <Link to="/about/123">About us id</Link> ||
      <Link
        to="/contact"
        state={{ name: "Send from navbar", phone: "9044211884" }}
      >
        Contact us{" "}
      </Link>
      <Outlet></Outlet>
    </div>
  );
}

export default Navbar;
