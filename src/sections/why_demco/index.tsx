import type { FC } from "react";
import "./style.css";
const WhyDemco:FC = () => {
  const points = [
    "Salesforce Gold/Crest Partner providing reliable Salesforce solutions with a highly efficient team of certified Salesforce Developers, Product Consultants, Administrators, and Architects that has delivered over 75 projects.",
    "Great experience in Salesforce implementations across multiple industry verticals like Financial Services, Education, Healthcare Services, Engineering & Real Estate, Manufacturing, Retail, Logistics, and Non-Profit.",
    "Strong expertise in developing heavily customized applications on the Salesforce platform to achieve the highest degree of business process automation for specific use cases — both as a standalone system and as an integrated system with third-party systems.",
    "Part of a larger technology services company to support customers with needs outside the Salesforce system like Web Apps, Mobile Apps, IoT, RPA, etc., in conjunction with their Salesforce investment.",
    "Unique combination as a Salesforce Consulting and ISV partner to support the needs of customers and partners to launch their apps on AppExchange. We have 7+ of our Apps/Products on AppExchange and have rolled out dozens of Apps for other ISVs.",
    "Technical competencies in multiple Salesforce clouds like Sales Cloud, Service Cloud, App Cloud, Marketing Cloud, Experience Cloud, Pardot, CPQ, Field Service Lightning, MuleSoft, and Einstein Analytics.",
    "Wide range of accelerators and assets to reduce the go-live time and better assessment through a system close enough to the final system expectations.",
    "Global delivery experience with customers across multiple geographies including the USA, UK, Europe, Australia, and India.",
  ];

  return (
    <section className="differentiators">
      <div className="content-wrapper">
        <div className="text-column">
          <h2>What Makes Us Different from Other Salesforce Partners?</h2>
          <ul>
            {points.map((point, i) => (
              <li key={i}>
                <img src="assets/why_demco/check.svg" alt="Check Icon" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyDemco;
