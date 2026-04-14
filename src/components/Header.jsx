import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <h1 className="logo">My Portfolio SPA</h1>

        <nav className="nav">
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Про мене
          </NavLink>

          <NavLink
            to="/my-city"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Моє місто
          </NavLink>

          <NavLink
            to="/my-future"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Мій розвиток
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;