import React from 'react';
import { FaCar, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaEnvelopeCircleCheck } from "react-icons/fa6";

const BasicDashboard = () => {
    return (
        <div className=' flex justify-between px-6 py-6 bg-[#FFFFFF]'>
            <div className='flex justify-center items-center gap-4'>
                <span className='border p-4 rounded-md bg-white'>
                    <FaCar className='text-[#E3C5E0] text-xl' />
                </span>
                <div>
                    <h3 className='font-semibold text-xl'>Basic Dashboard</h3>
                    <p className='text-sm text-gray-400'>This is an example dashboard created using build in elements and components</p>
                </div>
            </div>
            <div className='flex justify-center items-center gap-6'>
                <span className='bg-[#4D5257] p-2 rounded-sm'>
                    <FaStar className='text-white' />
                </span>
                <Link className='flex justify-center items-center gap-2  bg-[#2EA6ED] w-24 h-8 rounded-sm text-white'>
                    <FaEnvelopeCircleCheck />
                    <span>Buttons</span>
                </Link>
            </div>

        </div>
    );
};

export default BasicDashboard;