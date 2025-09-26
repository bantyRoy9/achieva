import React from 'react';
import salesforce from './../assets/salesforce-cloud.png';
export interface ContentData {
    title: string;
    paragraph1: string;
    paragraph2: string;
}

/** Props for the TextBlock component */
export interface TextBlockProps {
    paragraph1: string;
    paragraph2: string;
}

/** Props for the ImageBlock component */
export interface ImageBlockProps {
    imageSrc: string;
    altText: string;
}
const TextBlock: React.FC<TextBlockProps> = ({ paragraph1, paragraph2 }) => {

    // Helper function for rendering bold text
    const createMarkup = (htmlString: string) => {
        return { __html: htmlString };
    };

    return (
        <div className={'textBlock'}>
            <p
                dangerouslySetInnerHTML={createMarkup(paragraph1)}
                className={'paragraph'}
            />
            <p
                dangerouslySetInnerHTML={createMarkup(paragraph2)}
                className={'paragraph'}
            />
        </div>
    );
};
const ImageBlock: React.FC<ImageBlockProps> = ({ imageSrc, altText }) => {
    return (
        <div className={'imageBlock'}>
            {/* The props imageSrc and altText must be strings, as defined in ImageBlockProps */}
            <img src={imageSrc} alt={altText} className={'salesforceImage'} />
        </div>
    );
};
const AboutSection: React.FC = () => {
    // Use the ContentData interface for the content object
    const content: ContentData = {
        title: 'Innovate Business Processes with a Trusted Salesforce Partner Company',
        paragraph1: `Salesforce partners help businesses innovate with Salesforce and bring a digital future to their customers. Achieva is a **Salesforce Gold/Crest Partner** and holds over two decades of experience in developing and maintaining IT solutions and services. We are a strong team of **Developers, Administrators, Product Consultants, and Architects** who are well-versed in Salesforce products, platforms, and related ecosystems.`,
        paragraph2: `Our **Salesforce implementation expertise** spans **Sales Cloud, Marketing Cloud, Service Cloud, Analytics Cloud, Financial Services Cloud, and Non-profit Cloud**. To implement these solutions, we use **agile methodologies** that focus on iterative and phased development. Being a certified Salesforce partner, our **CRM deployment experience** runs across industries such as **Healthcare, Finance, Professional Services, Engineering & Real Estate, Insurance, Logistics, Manufacturing, Hi-Tech, and Non-profits.**`,
    };

    // Image source (Placeholder path)

    return (
        <div className={'aboutContainer'}>
            <h1 className={'mainTitle'}>{content.title}</h1>
            <div className={'contentWrapper'}>
                {/* Props passed are automatically checked against the TextBlockProps interface */}
                <TextBlock
                    paragraph1={content.paragraph1}
                    paragraph2={content.paragraph2}
                />
                {/* Props passed are automatically checked against the ImageBlockProps interface */}
                <ImageBlock
                    imageSrc={salesforce}
                    altText="Salesforce cloud logo surrounded by icons for health, tech, and service"
                />
            </div>
            <div className={'backgroundGear1'}></div>
            <div className={'backgroundGear2'}></div>
        </div>
    );
};

export default AboutSection;