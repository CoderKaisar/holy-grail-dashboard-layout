import React from 'react';
import Para from './Para';
import BasicDashboard from '../BasicDashboard/BasicDashboard';
import BandwidthContent from '../BandwidthContent/BandwidthContent';

const MainContent = () => {
    return (
        <div>
            <BasicDashboard />
            <BandwidthContent />
        </div>
    );
};

export default MainContent;