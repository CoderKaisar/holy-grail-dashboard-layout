import React from 'react';
import BandwidthRatings from './BandwidthRatings';
import BandwithProgressBar from './BandwithProgressBar';
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { FaComputer } from "react-icons/fa6";
import Chart from 'react-google-charts';
import { GiSelfLove } from 'react-icons/gi';

const BandwidthContent = () => {
    const data = [
        ["Copper", 8.94, "#b87333"], // RGB value
        ["Silver", 10.49, "silver"], // English color name       
        ["Platinum", 1.45, "color: #e5e4e2"], // CSS-style declaration
    ];
    return (
        <section className='px-6 mb-10'>
            <div className='flex gap-4 py-4'>
                <BandwithProgressBar />
                <BandwidthRatings />
            </div>
            <div className='flex justify-between items-center gap-4'>
                <div className='flex justify-between items-center w-[50%] gap-4'>
                    <div className='bg-[#FFFFFF] flex flex-col justify-center items-center space-y-4 p-4 w-[50%] rounded-lg'>
                        <span>
                            <IoSettingsOutline className='text-4xl bg-[#D3D8E1] p-2 rounded-full text-[#748298]' />
                        </span>
                        <div className='text-center flex flex-col gap-2'>
                            <h2 className='text-3xl font-bold'>45.8K</h2>
                            <p className='text-sm text-gray-400 '>Total views</p>
                        </div>

                        <div className='flex justify-center items-center gap-2 text-gray-400'>
                            <span>
                                <IoIosArrowUp />
                            </span>
                            <p>175.5%</p>
                        </div>
                    </div>
                    <div className='bg-[#FFFFFF] flex flex-col justify-center items-center space-y-4 p-4 w-[50%] rounded-lg'>
                        <span>
                            <FaComputer className='text-4xl bg-[#F8D4D6] p-2 rounded-full text-[#D78386]' />
                        </span>
                        <div className='text-center flex flex-col gap-2'>
                            <h2 className='text-3xl font-bold'>5.28K</h2>
                            <p className='text-sm text-gray-400 '>Report Submitted</p>
                        </div>

                        <div className='flex justify-center items-center gap-2 text-gray-400 text-[#AE666F]'>
                            <span>
                                <IoIosArrowUp />
                            </span>
                            <p>54.1%</p>
                        </div>
                        {/* <Chart chartType="ColumnChart" width="100%" height="10px" data={data} /> */}
                    </div>

                </div>
                <div className='w-[50%] bg-[#FFFFFF] h-full py-4 rounded-lg flex flex-col justify-center items-center space-y-4'>
                    <GiSelfLove className='text-4xl bg-[#FADED3] p-2 rounded-full' />
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <h2 className='text-3xl font-bold'>4517.82</h2>
                        <p className='text-sm text-gray-400'>Active Social Profiles</p>
                    </div>
                    <div className='flex gap-2 justify-center items-center text-sm'>
                        <p>Down by</p>
                        <div className='flex justify-center items-center gap-1 text-[#BE6068]'>
                            <span><IoIosArrowDown /></span>
                            <span>54.1%</span>
                        </div>
                        <p>from 30days ago</p>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default BandwidthContent;