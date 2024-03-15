import React from 'react';
import { IoMenuOutline } from 'react-icons/io5';
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from 'react-icons/io';
import { FaRegCalendarDays } from 'react-icons/fa6';

const Navbar = () => {
    return (
        <div className='w-full h-35  h-12 flex justify-center items-center text-white '>
            <div className='w-[20%] h-full bg-[#FA8BA1] flex justify-between items-center px-2 '>
                <h2>Classic</h2>
                <span>
                    <IoMenuOutline className='text-3xl' />
                </span>
            </div>
            <div className='w-[80%] px-2 bg-[#FA7B8E] flex justify-between items-center'>
                <span>
                    <CiSearch className="text-4xl bg-[#E06881] p-2 rounded-full m-2" />
                </span>
                <div className='flex justify-start items-center gap-4'>
                    <div className='flex justify-center items-center gap-2'>
                        <img src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" className='w-8 h-8 rounded-full' alt="" />
                        <span>
                            <IoIosArrowDown />
                        </span>
                    </div>
                    <div className='flex flex-col justify-start items-start'>
                        <h2 className='text-sm font-semibold'>Alina Mclourd</h2>
                        <p className='text-xs'>VP People Manager</p>
                    </div>
                    <div>
                        <span>
                            <FaRegCalendarDays className='text-4xl bg-[#40AAE3] p-2 rounded-md' />
                        </span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;