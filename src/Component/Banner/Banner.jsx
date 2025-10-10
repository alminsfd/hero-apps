import React from 'react';
import hero from '../../assets/hero.png';
import play from '../../assets/playstore.png';
import app from '../../assets/applestore.png'
import { Link } from 'react-router';


const Banner = () => {
    return (
        <div>
            <h1 className='text-center font-bold md:text-7xl text-3xl text-[#001931] mb-4' >We Build <br /> <span className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip bg-clip-text'>Productive</span> Apps</h1>
            <p className='text-center text-[#627382] md:text-xl text-base mb-3 ' >At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.  <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='flex flex-col md:flex-row justify-center items-center gap-7 mb-10 mt-10' >
                <Link  target='_blank' to='https://play.google.com/store/apps' >
                    <div className='flex btn p-5 cursor-pointer' >
                        <img className='mr-2' src={play} alt="" />
                        <button className='text-[#001931] text-xl font-semibold cursor-pointer ' >Google Play</button>
                    </div>
                </Link>
                <Link  target='_blank' to='https://www.apple.com/app-store/' >
                    <div className='flex border border-[#ddd] p-5 rounded-sm cursor-pointer btn' >
                        <img className='mr-2' src={app} alt="" />
                        <button className='  text-[#001931] text-xl font-semibold cursor-pointer shadow-2xs ' >App store</button>
                    </div>
                </Link>
            </div>
            <img className='mx-auto md:h-[380px] h-auto' src={hero} alt="" />
        </div>
    );
};

export default Banner;