import React from 'react';
import Logo from '../../assets/logo.png';
import { Link, NavLink } from 'react-router';

const Header = () => {
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/app' >Apps</NavLink></li>
                            <li><NavLink to='/install' >Installation</NavLink></li>


                        </ul>
                    </div>
                    <Link to='/' >
                        <div className='flex items-center md:ml-10 ' >
                            <img src={Logo} className='h-[30px] mr-3' alt="" />
                            <h3  className='font-bold text-lg  bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip bg-clip-text' >HERO.IO</h3>
                        </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-medium text-lg ">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/app' >Apps</NavLink></li>
                        <li><NavLink to='/install' >Installation</NavLink></li>

                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className='btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white  font-semibold text-lg md:mr-10 ' to='https://github.com/alminsfd'><i className="fa-brands fa-github"></i>Contribute</Link>
                </div>
            </div>
            
        </>
    );
};

export default Header;