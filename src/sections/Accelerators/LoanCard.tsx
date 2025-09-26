import React from "react";
import "./LoanCard.css";

interface LoanCardProps {
  logo: string;         // image source
  description: string;  // description text
  link?: string;        // optional "Read More" link
}

const LoanCard: React.FC<LoanCardProps> = ({ logo, description, link = "#" }) => {
  return (
    <div className="loan-card">
      {/* Logo */}
      <div className="loan-logo">
        <img src={logo} alt="Logo" className="loan-logo-img" />
      </div>

      {/* Description */}
      <p className="loan-description">{description}</p>

      {/* Read More */}
      <a href={link} className="loan-link">
        Read More <span className="arrow">›</span>
      </a>
    </div>
  );
};

export default LoanCard;
