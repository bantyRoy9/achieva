import React from 'react';
import './style.css';

const AboutSection: React.FC = () => {
    const content = {
        title: ' Innovate Business Processes with <br/> a Trusted Salesforce Partner Company',
        paragraph1: `<b>Salesforce</b> partners help businesses innovate with Salesforce and bring a <br />
          digital future to their customers. Achieva is a <b>Salesforce Gold/Crest <br />
          Partner</b> and holds over two decades of experience in developing and <br />
          maintaining IT solutions and services. We are a strong team of Developers, <br />
          Administrators, Product Consultants, and Architects who are well-versed in <br />
          Salesforce products, platforms, and related ecosystems.`,
        paragraph2: `Our <b>Salesforce</b> implementation expertise spans <b>Sales Cloud, Marketing <br />
          Cloud, Service Cloud, Analytics Cloud, Financial Services Cloud, and <br />
          Non-profit Cloud.</b> To implement these solutions, we use agile <br />
          methodologies that focus on iterative and phased development. Being a <br />
          certified Salesforce partner, our <b>CRM</b> deployment experience runs across <br />
          industries such as <b>Healthcare, Finance, Professional Services, <br />
          Engineering & Real Estate, Insurance, Logistics, Manufacturing, Hi-Tech, <br />
          and Non-profits.</b>`,
        image: 'assets/about/salesforce-cloud.png',
    };

    return (
        <div className={'aboutContainer'}>
            <h1 className="mainTitle" dangerouslySetInnerHTML={{ __html: content.title }} />
            <div className={'contentWrapper'}>
                <div className={'textBlock'}>
                    <p className={'paragraph'} dangerouslySetInnerHTML={{ __html: content.paragraph1 }} />
                    <p className={'paragraph'} dangerouslySetInnerHTML={{ __html: content.paragraph2 }} />
                </div>
                <div className={'imageBlock'}>
                    <img src={content.image} alt={""} className={'salesforceImage'} />
                </div>
            </div>
            <div className='badge'>
                {Array(4).fill(null).map((_, index) => <img key={`about-${index}`} src={`/assets/about/image${index + 1}.png`} alt={`Salesforce Badge ${index + 1}`} className='badgeImage' />)}
            </div>
            <div className='backgroundGear1'></div>
        </div>
    );
};

export default AboutSection;