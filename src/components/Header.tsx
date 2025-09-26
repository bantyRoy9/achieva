import React, { useState } from "react";
import "./../global.css";
import logo from "./../assets/logo.svg";
import down from "./../assets/down.svg";
import searchlogo from "./../assets/svg/search.svg";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Achieva Logo" />
      </div>
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <a href="#">About Achieva</a>
        <a href="#">
          Platform <span><img src={down}/></span>
        </a>
        <a href="#">
          Services <span><img src={down}/></span>
        </a>
        <a href="#">
          Accelerators and Solutions <span><img src={down}/></span>
        </a>
        <a href="#">
          Industry Expertise <span><img src={down}/></span>
        </a>
        <a href="#">Customer Stories</a>
        <a href="#">Contact Us</a>
      </nav>
      <img className="search-icon" src={searchlogo} alt="Search" />  
      {/* CTA Button */}
      <button className="cta-button">LET’S TALK</button>

      {/* Hamburger for mobile */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
