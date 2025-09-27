import React, { useState } from 'react';
import './style.css';

interface CaseStudy {
  id: number;
  title: string;
  stats: {
    percentage: string;
    description: string;
  }[];
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'One of the Largest Promotional Products Suppliers, KOOZIE Group, Streamlines its Case Management with Salesforce Community and Service Cloud',
    stats: [
      { percentage: '75%', description: 'Significant reduction in case escalations' },
      { percentage: '78%', description: 'Improved customer support with selfservice options' },
      { percentage: '82%', description: 'Optimized agent productivity with faster case resolutions' },
      { percentage: '82%', description: 'Optimized agent productivity with faster case resolutions' },
    ],
    image: 'assets/case_study/image.jpg',
  },
  {
    id: 2,
    title: 'Another Company Achieves Success with Salesforce Implementation',
    stats: [
      { percentage: '60%', description: 'Increased customer satisfaction' },
      { percentage: '90%', description: 'Reduced operational costs' },
      { percentage: '70%', description: 'Enhanced data accuracy' },
      { percentage: '85%', description: 'Faster market response' },
    ],
    image: 'assets/case_study/image.jpg',
  },
  {
    id: 3,
    title: 'Global Enterprise Optimizes Sales with Advanced Salesforce CRM',
    stats: [
      { percentage: '50%', description: 'Sales pipeline growth' },
      { percentage: '95%', description: 'Improved lead conversion' },
      { percentage: '75%', description: 'Better sales team collaboration' },
      { percentage: '80%', description: 'Real-time performance insights' },
    ],
    image: 'assets/case_study/image.jpg',
  },
];

const CaseStudySlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="case-study-slider-section">
      <h2 className="mainTitle">Case Study</h2>
      <div className="slider-wrapper">
        <div className="slider-container">
          {caseStudies.map(({ title, stats, image }, index) => {
            let positionClass = '';
            if (index === activeIndex) {
              positionClass = 'active-card';
            } else if (index === (activeIndex - 1 + caseStudies.length) % caseStudies.length) {
              positionClass = 'prev-card';
            } else if (index === (activeIndex + 1) % caseStudies.length) {
              positionClass = 'next-card';
            } else {
              positionClass = 'hidden-card';
            }

            return (
              <div className={`case-study-card ${positionClass || ''}`}>
                <div className="content-side">
                  <h3>{title}</h3>
                  <div className="stats-grid">
                    {stats.map((stat, index) => (
                      <div key={index} className="stat-item">
                        <h4>{stat.percentage}</h4>
                        <p>{stat.description}</p>
                      </div>
                    ))}
                  </div>
                  <button className="learn-more-btn">
                    LEARN MORE <img className='learn-more-arrow' src='assets/svg/right.svg' />
                  </button>
                </div>
                <div className="image-side">
                  <img src={image} alt="Case Study Visual" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="pagination-dotss">
        {caseStudies.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default CaseStudySlider;