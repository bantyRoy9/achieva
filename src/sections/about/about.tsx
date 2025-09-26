import React from 'react';
import './index.css';

const AboutSection: React.FC = () => {
    const content = {
        title: 'Innovate Business Processes with a Trusted Salesforce Partner Company',
        paragraph1: 'Salesforce partners help businesses innovate with Salesforce and bring a digital future to their customers. Achieva is a Salesforce Gold/Crest Partner and holds over two decades of experience in developing and maintaining IT solutions and services. We are a strong team of Developers, Administrators, Product Consultants, and Architects who are well-versed in Salesforce products, platforms, and related ecosystems.',
        paragraph2: 'Our Salesforce implementation expertise spans Sales Cloud, Marketing Cloud, Service Cloud, Analytics Cloud, Financial Services Cloud, and Non-profit Cloud. To implement these solutions, we use agile methodologies that focus on iterative and phased development. Being a certified Salesforce partner, our CRM deployment experience runs across industries such as Healthcare, Finance, Professional Services, Engineering & Real Estate, Insurance, Logistics, Manufacturing, Hi-Tech, and Non-profits.',
        image: 'assets/about/salesforce-cloud.png',
    };

    return (
        <div className={'aboutContainer'}>
            <h1 className={'mainTitle'}>{content.title}</h1>
            <div className={'contentWrapper'}>
                <div className={'textBlock'}>
                    <p className={'paragraph'}>{content.paragraph1}</p>
                    <p className={'paragraph'}>{content.paragraph2}</p>
                </div>
                <div className={'imageBlock'}>
                    <img src={content.image} alt={""} className={'salesforceImage'} />
                </div>
            </div>
            <div className='badge'>
                {Array(4).fill(null).map((_, index) => <img key={`about-${index}`} src={`/assets/about/image${index + 1}.png`} alt={`Salesforce Badge ${index + 1}`} className='badgeImage'/>)}
            </div>
            <div className='backgroundGear1'></div>
        </div>
    );
};

export default AboutSection;