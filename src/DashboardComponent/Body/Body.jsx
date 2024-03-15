import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const Body = () => {
    return (
        <section className='flex justify-between gap-2'>
           <Sidebar/>
           <Outlet/> 
        </section>
    );
};

export default Body;