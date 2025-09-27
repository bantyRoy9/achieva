import React, { useState } from 'react';
import './style.css';

const ServicesSection = () => {
  const [expanded, setExpanded] = useState<number|null>(1);

  const services:Array<{title:string,content:string|null}> = [
    { title: 'Business Consulting & Advisory', content: null },
    { title: 'AI Automation', content: 'We are a globally-ranked Salesforce Gold Partner delivering implementation services to help organizations realize accelerated performance by implementing diverse Salesforce Cloud platforms.'},
    { title: 'Tailored Solution Engineering', content: null },
    { title: 'Integration Services', content: null },
    { title: 'Product Development', content: null },
    { title: 'Managed Services', content: null },
  ];

  const toggleExpanded = (index:number|null) => {
    setExpanded(index === expanded ? null : index);
  };

  return (
    <section className='services-container'>
      <div className="services-section">
      <div className="services-left-panel">
        <div className="panel-header">
          <h2>Our Services</h2>
          <span className="logo-icon"><img src={'assets/service/logo.svg'}/></span>
        </div>
        <div className="panel-content">
          <p>Achieva offers full suite of Salesforce services to help enterprises improve their business operations, have control over their customer data, and make smart data-backed decisions. From strategic consulting and multi-cloud implementation to custom development, seamless third-party integrations, and AI agent development, our Salesforce-certified experts tailor solutions that directly align with your business goals. Our expertise spans implementation, data migration, ongoing support, and leveraging AI capabilities with Salesforce Einstein. With a holistic approach and deep industry experience, we help you make the most out of your Salesforce instance.</p>
        </div>
      </div>
      <div className="right-panel">
        {services.map(({title,content}, index) => (
           <div className={`service-item ${expanded ? 'expanded' : ''}`}>
           <div className="item-header" onClick={()=>toggleExpanded(index)}>
             <div className="item-title-group">
               <img className={`item-icon`} src={`assets/service/image${index + 1}.svg`} alt={`Service Icon ${index + 1}`}/>
               <h3>{title}</h3>
             </div>
             <img src={`assets/service/${expanded===index?'down':'left'}.svg`} alt="Line" className="line-image" />
           </div>
           {expanded && content && (
             <div className="item-content">
               <p>{content}</p>
               <a href="#" className="read-more">Read More ›</a>
             </div>
           )}
         </div>
        ))}
      </div></div>
    </section>
  );
};

export default ServicesSection;