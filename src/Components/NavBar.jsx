import React from "react";
import Hamburger from "../assets/Icons/hamburger.svg";
import LogoIcon from "../assets/Icons/cup-broken.svg";
import "../Styles/NavBar.css";

const NavBar = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div className={`landing-page-menu ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="menu-header">
        <div className="logo-container">
          <img src={LogoIcon} alt="logo" className="logo-icon" />
        </div>
        <div className="hamburger-menu">
          <img
            src={Hamburger}
            alt="hamburger"
            id="hamburger"
            onClick={toggleMenu}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;



