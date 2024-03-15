import React from 'react';
import { IoRocketOutline } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa6";
import Chart from 'react-google-charts';

const BandwithProgressBar = () => {

    const data = [
        [
            { type: "date", label: "Day" },
            "usage",
            "speed",
        ],
        [new Date(2014, 0), -0.5, 5.7],
        [new Date(2014, 1), 0.4, 8.7],
        [new Date(2014, 2), 0.5, 12],

    ];
    const options = {
        width: 350,
        height: 100,
        series: {
            // Gives each series an axis name that matches the Y-axis below.
            0: { axis: "Temps" },
            1: { axis: "Daylight" },
        },
        axes: {
            // Adds labels to each axis; they don't have to match the axis names.
            y: {
                Temps: { label: "Temps (Celsius)" },
                Daylight: { label: "Daylight" },
            },
        },
    };

    return (
        <div className=' w-[50%] bg-[#FFFFFF]  rounded-md '>
            <div className='flex justify-between mb-2 p-4'>
                <div className='flex justify-center items-center gap-2'>
                    <span className='flex justify-center items-end'>
                        <IoRocketOutline className='text-[#C3E3DF] text-xl' />
                    </span>
                    <p className='font-bold text-gray-500 uppercase text-sm'>Bandwith Reports</p>
                </div>
                <div className='flex gap-4'>
                    <button className='px-2 text-gray-600 text-sm hover:bg-[#053C6F] hover:text-white hover:px-2 bg-gray-200 rounded-sm'>Tab 1</button>
                    <button className='px-2 text-gray-600 text-sm hover:bg-[#053C6F] hover:text-white hover:px-2 bg-gray-200 rounded-sm'>Tab 2</button>
                </div>
            </div>
            <hr className='w-full  shadow-md ' />
            <div className='px-4 grid grid-cols-2 gap-6 py-4 '>
                <div>
                    <div className='flex justify-between items-center'>
                        <span className='text-xl'>63%</span>
                        <p className='text-sm text-gray-400'>Generated Leads</p>
                    </div>
                    <progress className="progress progress-warning bg-[#C91425] w-44" value={25} max="100"></progress>
                </div>
                <div>
                    <div className='flex justify-between items-center'>
                        <span className='text-xl'>32%</span>
                        <p className='text-sm text-gray-400'>Submitted Tickers</p>
                    </div>
                    <progress className="progress progress-[#A4C386] bg-[#74A944] w-44" value={10} max="100"></progress>
                </div>
                <div>
                    <div className='flex justify-between items-center'>
                        <span className='text-xl'>71%</span>
                        <p className='text-sm text-gray-400'>Server Applications</p>
                    </div>
                    <progress className="progress progress-info bg-[#253C7F] w-44" value={40} max="100"></progress>
                </div>
                <div>
                    <div className='flex justify-between items-center'>
                        <span className='text-xl'>71%</span>
                        <p className='text-sm text-gray-400'>Server Applications</p>
                    </div>
                    <progress className="progress progress-warning bg-[#C91425] w-44" value={20} max="100"></progress>
                </div>
            </div>
            <div className='px-4'>
                <div className='flex justify-center items-center'>
                    <span className='flex justify-center items-center gap-2 text-red-500 pr-2'>
                        <FaArrowLeft className='text-sm' />
                        <p className='font-semibold'>175.5%</p>
                    </span>
                    <p className='text-sm text-gray-400'>increased server resources</p>
                </div>
            </div>
            <div className='px-2 py-4'>
                <Chart
                    chartType="Line"
                    width="70%"
                    height="50px"
                    data={data}
                    options={options}
                />
            </div>
        </div>
    );
};

export default BandwithProgressBar;