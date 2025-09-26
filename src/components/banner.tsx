import React from "react";
import "./../global.css";

const BannerSection = () => {
  return (
    <section className="banner">
      <h1 className="title">Best-in-Class CRM for Insurance & Finance</h1>
      <p className="subtitle">
        Empower your business with AI-powered features and full-scale automation.
        Drive growth, enhance customer relationships, and streamline operations.
      </p>
      <div className="cta-buttons">
        <button className="btn-primary">GET STARTED TODAY</button>
        <button className="btn-secondary">BOOK A DEMO</button>
      </div>
    </section>
  );
};

export default BannerSection;
