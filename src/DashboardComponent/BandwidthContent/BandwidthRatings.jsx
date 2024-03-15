import React from 'react';
import { FiSettings } from "react-icons/fi";
import { IoIosArrowUp } from "react-icons/io";
import { MdMonitor } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
const BandwidthRatings = () => {
    return (
        <div className='w-[50%] grid grid-cols-2 gap-4'>
            <div className='flex flex-col justify-center items-center bg-[#26CCEA] space-y-4 p-4 text-white rounded-md'>
                <span>
                    <FiSettings className='bg-[#FCFEFE] text-4xl px-2 rounded-full text-[#23CCE7]' />
                </span>
                <div className='text-center'>
                    <h4 className='text-4xl font-bold'>87,4</h4>
                    <p className='text-sm'>Reports Generated</p>
                </div>
                <div className='flex justify-center items-center'>
                    <span>
                        <IoIosArrowUp />
                    </span>
                    <p className='font-semibold'>54.9%</p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center bg-[#385176] space-y-4 p-2 text-white rounded-md'>
                <span>
                    <MdMonitor className='bg-[#FCFEFE] text-4xl px-2 rounded-sm text-[#F7E5E7]' />
                </span>
                <div className='text-center'>
                    <h4 className='text-4xl font-bold'>17.2K</h4>
                    <p className='text-sm'>Profiles</p>
                </div>
                <div className='flex justify-center items-center gap-[4px]'>
                    <p className='font-semibold'>62.7%</p>
                    <span>
                        <FaArrowLeft className='text-xs' />
                    </span>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center bg-[#25AF7C] space-y-4 p-2 text-white rounded-md'>
                <span>
                    <GiGraduateCap className='bg-[#364848] text-4xl px-2 rounded-sm text-[#C7CECE]' />
                </span>
                <div className='text-center'>
                    <h4 className='text-4xl font-bold'>63.2K</h4>
                    <p className='text-sm'>Bug Fixed</p>
                </div>
                <div className='flex justify-center items-center gap-[4px]'>
                    <span>
                        <FaArrowRight className='text-xs' />
                    </span>
                    <p className='font-semibold'>72.1%</p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center bg-[#FF7A7C] space-y-4 p-4 text-white rounded-md'>
                <span>
                    <FiSettings className='bg-[#FCFEFE] text-4xl px-2 rounded-full text-[#FF8181]' />
                </span>
                <div className='text-center'>
                    <h4 className='text-4xl font-bold'>45.8K</h4>
                    <p className='text-sm'>Total Views</p>
                </div>
                <div className='flex justify-center items-center'>
                    <span>
                        <IoIosArrowUp />
                    </span>
                    <p className='font-semibold'>175.5%</p>
                </div>
            </div>
        </div>
    );
};

export default BandwidthRatings;