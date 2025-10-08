import React from 'react';
import Logo from '../../assets/logo.png';
import { Link, NavLink } from 'react-router';
const Footer = () => {
    return (
        <>
            <footer className=" bg-[#001931] text-neutral-content p-10">
                <div className='footer sm:footer-horizontal' >
                    <nav>
                        <Link to='/' >
                            <div className='flex items-center md:ml-10 ' >
                                <img src={Logo} className='h-[30px] mr-3' alt="" />
                                <h3 className='font-bold text-lg  text-white' >HERO.IO</h3>
                            </div>
                        </Link>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                        <a className="link link-hover">development</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title  ">Social Links</h6>
                        <div className='flex gap-2'>
                            <i className="fa-brands fa-facebook text-2xl "></i>
                            <i className="fa-brands fa-square-x-twitter text-2xl "></i>
                            <i className="fa-brands fa-linkedin text-2xl "></i>
                        </div>
                    </nav>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-4 text-center">
                    <p className="font-semibold text-white">
                        Copyright © 2025 - All right reserved
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;