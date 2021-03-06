import React from 'react';
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div id="nav-bar">
      <NavLink to="/" className="nav-link">Home</NavLink>
      <NavLink to="/movies" className="nav-link">Movies List</NavLink>
      <NavLink to="/movies/new" className="nav-link">New Movie</NavLink>
      <NavLink to="/lists" className="nav-link">Your Lists</NavLink>
    </div>
  );
}

export default NavBar;