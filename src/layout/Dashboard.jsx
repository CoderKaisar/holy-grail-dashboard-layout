import React from 'react';
import Navbar from '../DashboardComponent/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer/Footer';
import Sidebar from '../DashboardComponent/Sidebar/Sidebar';


const Dashboard = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className='flex'>
                <div className='w-[20%] h-full bg-gray-700 '>
                    <Sidebar />
                </div>
                <div className='w-[80%] overflow-hidden bg-[#F2F3F5]'>
                    <Outlet />
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Dashboard;