import { type FC } from "react";
import "./style.css";
const Industry: FC = () => {
  const categories = ["Financial Services", "Manufacturer", "HiTech", "Insurance", "Real Estate", "Retail", "Healthcare", "Nonprofit",];
  return (
    <div className="industry-section">
      <div className="industry-header">
        <h2 className="industry-title">Industry We Serve</h2>
        <p className="industry-description">CRM & Clou   d Solutions for Growth-focused Businesses</p>
      </div>
      <div className="category-grid">
        {categories.map((title, indx) => (
          <a href='#' className={`category-card ${indx === 0 && 'active'}`} key={title}>
            <div className="category-content">
              <span className="category-icon">
                <img src={`assets/industry/${title || ''}.svg`} alt={`${title} Icon`} className="category-icon-img" />
              </span>
              <span className="category-title">{title}</span>
            </div>
            <img src='assets/industry/right.svg' alt="Arrow Icon" className="arrow-icon-img" />
          </a>))}
      </div>
    </div>
  );
};

export default Industry;
