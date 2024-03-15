import React from 'react';
import BandwidthRatings from './BandwidthRatings';
import BandwithProgressBar from './BandwithProgressBar';

const BandwidthContent = () => {
    return (
        <section className='px-6'>
            <div className='flex gap-4 py-4'>
                <BandwithProgressBar />
                <BandwidthRatings />
            </div>

        </section>
    );
};

export default BandwidthContent;