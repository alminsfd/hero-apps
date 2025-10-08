import { Download, Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const Singletopapp = ({ card }) => {
    const { image, description, ratingAvg, downloads ,id} = card
    return (
        <Link to={`/details/${id}`}>
            <div className='bg-white p-4 border border-[#ddd] shadow-md rounded-2xl' >
                <div>
                    <img className='md:h-[300px] md:w-[400px] h-[100px] mx-auto rounded-2xl ' src={image} alt="" />
                </div>
                <p className='text-center mt-3 font-medium md:text-xl text-sm' >{description}</p>
                <div className='mt-5 flex justify-between items-center' >
                    <div className='flex bg-[#ddd] text-[#00D390] p-1 rounded-sm ' >
                        <Download className='mr-2' />
                        <span>{downloads}</span>
                    </div>
                    <div className='flex bg-[#ddd] text-[#FF8811] p-1 rounded-sm ' >
                        <Star className='mr-2' />
                        <span>{ratingAvg}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Singletopapp;