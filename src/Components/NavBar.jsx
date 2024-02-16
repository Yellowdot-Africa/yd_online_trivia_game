import React, { useState } from "react";
import Hamburger from "../assets/Icons/hamburger.svg";
import LogoIcon from "../assets/Icons/cup-broken.svg";

const NavBar = ({ isMenuOpen, toggleMenu }) => {
  return (
    <>
      <div className={`landing-page-menu ${isMenuOpen ? "menu-open" : ""}`}>
        <div className="menu-header">
          <img src={LogoIcon} alt="logo" className="logo-icon" />
          <img
            src={Hamburger}
            alt="hamburger"
            className="hamburger"
            onClick={toggleMenu}
          />
        </div>
      </div>
    </>
  );
};

export default NavBar;
