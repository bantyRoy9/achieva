import React from 'react';
import './style.css';

// Define a type for a list of links


// Define a type for the column data
type FooterColumn = {
  category: string;
  links: string[];
};

const consultingLinks: FooterColumn[] = [
  {
    category: 'Consulting',
    links: [
      'Implementation',
      'Sales Cloud',
      'Marketing Cloud',
      'Service Cloud',
      'Analytics Cloud',
      'Experience Cloud',
      'Financial Services Cloud',
      'Nonprofit Cloud',
      'Salesforce Pardot',
      'Salesforce CPQ',
      'Data Cloud',
    ],
  },
  {
    category: 'Development',
    links: [
      'Custom App Cloud Development',
      'Mobile-First Solution Development',
      'AppExchange Product Development',
      'Salesforce Customization',
      'Hire Salesforce Developers',
    ],
  },
];

const integrationLinks: FooterColumn[] = [
  {
    category: 'Integration',
    links: [
      'Tableau Integration',
      'Outlook Integration',
      'SharePoint Integration',
      'MailChimp Integration',
      'ERP Integration',
      'SAP Integration',
      'DocuSign Integration',
      'SOAP API',
      'Stripe Integration',
      'Informatica Integration',
      'Call Center Integration',
    ],
  },
  {
    category: 'Managed Services',
    links: [
      'Remote Administrator',
      'Salesforce Production Support',
      'User Admin & Management Training',
    ],
  },
  {
    category: 'Migration',
    links: [
      'Classic to Lightning Migration',
      'Third-Party to Salesforce Migration',
    ],
  },
];

const otherLinks: FooterColumn[] = [
  {
    category: 'Salesforce AI',
    links: ['Agentforce', 'Einstein AI'],
  },
  {
    category: 'Accelerators & Solutions',
    links: [
      'LoansNeo',
      'OptimaPro',
      'DMS',
      'FieldsSalesConnect',
      'WorkRemote',
      'Nonprofit Navigator',
      'TimeState Pro',
      'Address Finder',
    ],
  },
  {
    category: 'Industry Solutions',
    links: [
      'Financial Services',
      'HealthCare',
      'Retail & Ecommerce',
      'Real Estate',
      'Manufacturing',
      'Non Profit',
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-columns">
          {/* Consulting and Development Column */}
          <div className="column">
            {consultingLinks.map((col, index) => (
              <div key={index} className="column-group">
                <h4>{col.category}</h4>
                <ul>
                  {col.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Integration, Managed Services, and Migration Column */}
          <div className="column">
            {integrationLinks.map((col, index) => (
              <div key={index} className="column-group">
                <h4>{col.category}</h4>
                <ul>
                  {col.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Salesforce AI, Accelerators, and Industry Solutions Column */}
          <div className="column">
            {otherLinks.map((col, index) => (
              <div key={index} className="column-group">
                <h4>{col.category}</h4>
                <ul>
                  {col.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact and Social Column */}
          <div className="column contact-column">
            <div className="column-group">
              <h4>Free Salesforce Audit</h4>
              <p>Collaborate With Us</p>
            </div>
            <div className="column-group">
              <h4>Blog</h4>
              <p>Resources</p>
            </div>
            <div className="column-group">
              <h4>Contact Us</h4>
              <p>
                801 Morgan Lane, Suite # 205, <br /> Plainsboro NJ 08536, USA
              </p>
              <p>+1 609 632 0350</p>
              <p>info@achieva.com</p>
            </div>
            <div className="social-media">
              <h4>Connect with us</h4>
              <div className="social-icons">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
            <div className="column-group">
              <h4>Terms of Use</h4>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="logo-container">
          {/* Add your logo image here */}
          <img src="/path/to/achieva-logo.svg" alt="Achieva Logo" />
        </div>
        <p className="copyright">Copyright © 2025 Achieva.</p>
      </div>
    </footer>
  );
};

export default Footer;