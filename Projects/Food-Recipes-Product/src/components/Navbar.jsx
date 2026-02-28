import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center gap-x-10 text-md mb-10 items-center">
      <NavLink className={(e) => (e.isActive ? "text-red-300" : "")} to="/">
        Home
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-red-300" : "")}
        to="/recipes"
      >
        Recipes
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-red-300" : "")}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        to="/create-recipes"
        className={({ isActive }) =>
          `px-4 py-2 bg-gray-900 rounded ${
            isActive ? "text-red-300" : "text-white"
          }`
        }
      >
        Create Recipes
      </NavLink>
    </div>
  );
};

export default Navbar;
