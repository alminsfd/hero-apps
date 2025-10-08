import React from 'react';
import Singletopapp from './Singletopapp';
import { Link } from 'react-router';

const Topapp = ({ data }) => {
    return (
        <div className='mt-15' >
            <h2 className='text-center font-bold text-5xl text-[#001931] ' >Trending Apps</h2>
            <p className='text-center text-xl text-[#627382] mt-3' >Explore All Trending Apps on the Market developed by us</p>
            <div className='grid md:grid-cols-4 grid-cols-1 gap-5 cursor-pointer mt-15' >
                {
                    data.map(card => <Singletopapp key={card.id} card={card} ></Singletopapp>)
                }
            </div>
            <div className='flex justify-center items-center mt-10' >
                <Link to="/app" >
                    <button className='btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white  font-semibold text-lg md:mr-10 ' >Show All</button>
                </Link>
            </div>

        </div>
    );
};

export default Topapp;