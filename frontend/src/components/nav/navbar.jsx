import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <div className="navbar_menu">
        <button className="navbar_menu-button">
          <img className="menu" src="icons8-menu-50.png" alt="" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

