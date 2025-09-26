import React from 'react';
import CardGrid from './CardGrid';
export interface ContentData {
    title: string;
}

const SaleforceAccelerator: React.FC = () => {
    // Use the ContentData interface for the content object
    const content: ContentData = {
        title: 'Salesforce Accelerators & Solutions',
    };

    return (<>
        <div className={'aboutContainer'}>
            <h1 className={'mainTitle'}>{content.title}</h1>     
        </div>
        <CardGrid/>
        </>
    );
};

export default SaleforceAccelerator;