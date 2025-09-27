import React, { useState } from "react";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ["About Achieva","Platform","Services","Accelerators and Solutions","Industry Expertise","Customer Stories","Contact Us"];
  return (
    <header className="header">
      <div className="logo"><img src={'assets/svg/logo.svg'} alt="Achieva Logo" /></div>
      <div className="nav-container">
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link, index) => (
            <a key={index} href={`#`} className="text">
              {link} {(link !== "About Achieva" && link !== "Contact Us" && link !== "Customer Stories") && <span><img src={'assets/svg/down.svg'} alt="Dropdown Icon" /></span>}
            </a>
          ))}
        </nav>
        <img className="search-icon" src={'assets/svg/search.svg'} alt="Search" />
        {/* CTA Button */}
        <button className="cta-button">LET’S TALK <img src={'/assets/svg/right.svg'}/></button>
      </div>
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
