import React from 'react';
import { IoDiamondOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { TiBell } from "react-icons/ti";
import '../../assets/CSS/sidebar.style.css'
import { FaCar } from "react-icons/fa";

const Sidebar = () => {
    return (
        <section className=' text-white  py-4 space-y-5 text-sm'>
            <div>
                <h2 className='buttonHead'>Pro Version</h2>
                <Link className='buttonStyle'> <IoDiamondOutline /><span>Upgrade to Pro</span></Link>
            </div>
            <div>
                <h3 className='buttonHead'>Menu</h3>
                <Link className='buttonStyle'>
                    <TiBell />
                    <span>Dashboard Example</span>
                </Link>
            </div>
            <div>
                <h3 className='buttonHead'>UI Component</h3>
                <nav>
                    <Link className='buttonStyle'>
                        <IoDiamondOutline />
                        <span>Element</span>
                    </Link>
                    <Link className='buttonStyle'>
                        <FaCar />
                        <span>Component</span>
                    </Link>
                    <Link className='buttonStyle'>
                        <IoDiamondOutline />
                        <span>Regular Tables</span>
                    </Link>
                </nav>
            </div>
            <div>
                <h3 className='buttonHead'>Widgets</h3>
                <Link className='buttonStyle'>
                    <TiBell />
                    <span>Dashboard Box</span>
                </Link>
            </div>
            <div>
                <h3 className='buttonHead'>Forms</h3>
                <nav>
                    <Link className='buttonStyle'>
                        <IoDiamondOutline />
                        <span>Control</span>
                    </Link>
                    <Link className='buttonStyle'>
                        <FaCar />
                        <span>Layout</span>
                    </Link>
                    <Link className='buttonStyle'>
                        <IoDiamondOutline />
                        <span>Validation</span>
                    </Link>
                </nav>
            </div>
            <div>
                <h3 className='buttonHead'>Chart</h3>
                <Link className='buttonStyle'>
                    <TiBell />
                    <span>Chart JS</span>
                </Link>
            </div>
        </section>
    );
};

export default Sidebar;