import React from 'react';
import './style.css';


const HeroSection: React.FC<any> = () => {
  return (
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

      {/* Navigation Arrows */}
      <div className="navigation-arrows">
        <button className="arrow left-arrow"><img src={'assets/svg/left.svg'}/></button>
        <button className="arrow right-arrow"><img src={'assets/svg/right.svg'}/></button>
      </div>

      {/* Pagination Dots */}
      <div className="pagination-dots"></div>

      {/* Scroll Down Indicator */}
      <div className="scroll-down">
        <span className="scroll-arrow"><img src="/assets/svg/scrolldown.svg"/></span>
        <span>SCROLL DOWN</span>
      </div>
    </section>
  );
};

export default HeroSection;