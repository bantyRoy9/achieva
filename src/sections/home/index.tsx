import type { FC } from "react";
import React, { useState } from "react";
import './style.css';
const Home: FC = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const navLinks = ["About Achieva", "Platform", "Services", "Accelerators and Solutions", "Industry Expertise", "Customer Stories", "Contact Us"];

    return (
        <>
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
                    <button className="cta-button">LET’S TALK <img src={'/assets/svg/right.svg'} /></button>
                </div>
                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </header>
            <section className="hero-section">
                <div className="background-image-container">
                    <img src="/assets/hero.png" alt="" className="hero-background-image" />
                    <div className="overlay"></div>
                </div>

                <div className="hero-content">
                    <h1 className="hero-title">Best-in-Class <span className="highlight">CRM</span> <br /> for Insurance & Finance</h1>
                    <p className="hero-subtitle">
                        Empower your business with AI-powered features and full-scale automation. Drive <br />
                        growth, enhance customer relationships, and streamline operations with <b>CRM FOR FINS</b> <br />
                        – the ultimate solution designed for insurance and finance professionals.
                    </p>
                    <div className="hero-buttons">
                        <button className="get-started-btn">GET STARTED TODAY!</button>
                        <button className="book-a-demo-btn">BOOK A DEMO ›</button>
                    </div>
                </div>

                <div className="navigation-arrows">
                    <button className="arrow left-arrow"><img src={'assets/svg/left.svg'} /></button>
                    <button className="arrow right-arrow"><img src={'assets/svg/right.svg'} /></button>
                </div>

                <div className="pagination-dots"></div>

                <div className="scroll-down">
                    <span className="scroll-arrow"><img src="/assets/svg/scrolldown.svg" /></span>
                    <span>SCROLL DOWN</span>
                </div>
            </section>
        </>
    )
}
export default Home;