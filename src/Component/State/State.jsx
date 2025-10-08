import React from 'react';

const State = () => {
    return (
        <div  className='text-white  bg-linear-to-r from-[#632EE3] to-[#9F62F2] md:p-20 p-10 ' >
            <h2 className='text-center font-bold md:text-5xl  text-2xl mb-7' >Trusted by Millions, Built for You</h2>
            <div  className='flex  flex-col md:flex-row  items-center justify-center' >
                <div className='md:mr-18 mb-10'>
                    <p className='mb-3 text-sm'  >Total Downloads</p>
                    <h2 className='font-extrabold md:text-6xl text-2xl mb-4' >29.6M</h2>
                    <p className='text-sm mb-4' >21% more than last month</p>
                </div>
                <div className='md:mr-18 mb-10 ' >
                    <p className='mb-3 text-sm' >Total Reviews</p>
                    <h2 className='font-extrabold md:text-6xl text-2xl mb-4'  >906K</h2>
                    <p  className='text-sm mb-4' >46% more than last month</p>
                </div>
                <div className='md:mr-18 mb-10 ' >
                    <p className='mb-3 text-sm' >Active Apps</p>
                    <h2 className='font-extrabold md:text-6xl text-2xl mb-4'  >132+</h2>
                    <p  className='text-sm mb-4' >31  will Launch for service </p>
                </div>
                
            </div>

        </div>
    );
};

export default State;