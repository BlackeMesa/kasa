import React from "react";
import "./Header.css"; 
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="app-header">
      <div className="app-logo">
        <img src="/img/LOGO-Orange.png" alt="Logo-orange" />
      </div>
      <nav className="app-nav">
        <NavLink to="/" exact="true" activeclassname="active-link">
          Accueil
        </NavLink>
        <NavLink to="/about" activeclassname="active-link">
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
