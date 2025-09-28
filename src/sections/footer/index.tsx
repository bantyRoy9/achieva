import React from 'react';
import './style.css';
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
          <div className="column">
            {consultingLinks.map((col, index) => (
              <div key={index} className="column-group">
                <h4>{col.category}</h4>
                <ul>
                  {col.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#">- {link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="column">
            {integrationLinks.map((col, index) => (
              <div key={index} className="column-group">
                <h4>{col.category}</h4>
                <ul>
                  {col.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#">- {link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="column">
            {otherLinks.map((col, index) => (
              <div key={index} className="column-group">
                <h4>{col.category}</h4>
                <ul>
                  {col.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#">- {link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="column contact-column">
            <div className="column-group gold">
              <h4>Free Salesforce Audit</h4>
              <h4>Collaborate With Us</h4>
            </div>
            <div className="column-group">
              <h4>Blog</h4>
              <h4>Resources</h4>
            </div>
            <div className="column-group">
              <h4>Contact Us</h4>
              <h4>
                801 Morgan Lane, Suite # 205, <br /> Plainsboro NJ 08536, USA
              </h4>
              <h4>+1 609 632 0350</h4>
              <h4>info@achieva.com</h4>
            </div>
            <div className="social-media">
              <h4>Connect with us</h4>
              <div className="social-icons">
                <a href="#"><img src='assets/svg/facebook.svg' alt='facebook' /></a>
                <a href="#"><img src='assets/svg/tweeter.svg' alt='tweeter' /></a>
                <a href="#"><img src='assets/svg/insta.svg' alt='insta' /></a>
              </div>
            </div>
            <div className="column-group">
              <h4>Terms of Use</h4>
              <h4>Privacy Policy</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="logo-container">
          <div className="logo"><img src={'assets/svg/logo1.svg'} alt="Achieva Logo" /></div>

        </div>
        <p className="copyright">Copyright © 2025 Achieva.</p>
      </div>
    </footer>
  );
};

export default Footer;