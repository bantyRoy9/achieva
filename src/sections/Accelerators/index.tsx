import React from 'react';
export interface ContentData {
  title: string;
}
import "./style.css";

const cards = [
  { description: "A unified loan management solution that empowers Non-Banking Financial Companies (NBFCs) to expedite and streamline loan processes for better business performance and enhanced customer acquisition.", link: "#", },
  { description: "All-round field service solution for effective management of work orders, warranties, service contracts, field service scheduling, spare parts inventory, and service requests.", link: "#", },
  { description: "A comprehensive dealer management solution that enables businesses manage their distributors and dealership network while improving communication, collaboration, and operations across all levels, through one platform.", link: "#", },
  { description: "End-to-end solution to manage field sales operations with automated field sales activities and more qualified leads driving enhanced lead nurturing and return on spending.", link: "#", },
  { description: "An intuitive workforce management solution that enables organizations to manage employees remotely by monitoring workflows and analyzing time spent on tasks curbing inefficiencies at reduced operational costs.", link: "#", },
  { description: "Salesforce-based solution for Non-Profit organizations that facilitates donors, funds, and projects management with accelerated donor acquisition, event performance, and fundraising campaign performance.", link: "#", },
  { description: "Salesforce-powered app accessible through mobile devices that allows creating event calendars on Salesforce objects to manage events, campaigns, tasks, etc., bolstering overall productivity.", link: "#", },
  { description: "Cloud-based application to find, capture, and validate the addresses of accounts, contacts, or any other objects on Salesforce that helps eliminate errors and reduces time to schedule deliveries.", link: "#", },
];
const SaleforceAccelerator: React.FC = () => {
  return (<><div className='saleforece-section'>
    <div className='section-header'>
      <h1 className={'mainTitle'}>Salesforce Accelerators & Solutions</h1>
      <p>Amplifying Business Performance through Salesforce Accelerators</p>
    </div>
    <div className="card-grid">
      {cards.map(({ description, link = "#" }, idx) => (
        <div className="loan-card">
          <div className="loan-logo">
            <img src={`assets/accelerators/image${idx + 1}.png`} alt="Logo" className="loan-logo-img" />
          </div>
          <p className="loan-description">{description}</p>
          <a href={link} className="loan-link">
            Read More <img src='assets/testimonial/right.svg' />
          </a>
        </div>
      ))}
    </div>
  </div>
    <div className="gradient-background"></div></>
  );
};

export default SaleforceAccelerator;