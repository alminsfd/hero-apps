import { Download, Star, ThumbsUp } from 'lucide-react';
import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Example from '../../Component/Ratinggraph/Ratings';
import Description from '../../Component/Describtion/Description';
import { toast } from 'react-toastify';
import { addDataTolocal } from '../../localstorage/loacalstorage';

const Moredetailsapp = () => {
    const [isDisable, setIsDisable] = useState(false)
    const { appid } = useParams()
    const appidNmber = parseInt(appid)
    const dates = useLoaderData()
    const moredetail = dates.find(data => data.id === appidNmber)
    const { image, companyName, size, reviews, downloads, ratingAvg, description, ratings, deepDescription,id } = moredetail
    console.log(moredetail)
    const handlerBtn = (id) => {
        toast.success(' Successfully Installed!')
        setIsDisable(true)
        addDataTolocal(id)

    }

    return (
        <div className='mt-15' >
            <div className='flex flex-col md:flex-row  md:gap-8 gap-3 items-center md:ml-25 ' >
                <div className='border border-[#ddd] shadow-sm rounded-xl p-3 ' >
                    <img className='md:w-[300px] md:h-[250px]  h-[100px]  w-auto' src={image} alt="" />
                </div>
                <div>
                    <h2 className='font-black md:text-3xl text-[#001931] mb-3 text-lg ml-6' >{description}</h2>
                    <p className='text-[#627382] md:text-xl text-sm ml-6 ' >Developed by <span className='font-semibold md:text-xl  text-sm bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text ' >{companyName}</span></p>
                    <div className='border boreder-t border-gray-200' ></div>
                    <div className='flex items-center justify-around mt-5' >
                        <div>
                            <Download className='md:size-10 text-green-500 mb-2' />
                            <p className='text-[#001931] text-sm mb-2' >Downloads</p>
                            <h2 className='text-[#001931] font-extrabold md:text-4xl text-xl' >{downloads}</h2>
                        </div>
                        <div>
                            <Star className='md:size-10 text-yellow-600 mb-2' />
                            <p className='text-[#001931] text-sm mb-2' >Average Ratings</p>
                            <h2 className='text-[#001931] font-extrabold md:text-4xl text-xl' >{ratingAvg}</h2>
                        </div>
                        <div>
                            <ThumbsUp className='md:size-10 text-purple-500 mb-2' />
                            <p className='text-[#001931] text-sm mb-2' >Total Reviews</p>
                            <h2 className='text-[#001931] font-extrabold md:text-4xl text-xl' >{reviews}</h2>
                        </div>
                    </div>
                    <button onClick={() => handlerBtn(id)} disabled={isDisable} className={`btn  p-2 mt-7 ml-6 ${isDisable ? 'text-green-700 opacity-80 cursor-not-allowed bg-gray-300' : 'bg-[#00D390] text-white'}`}>{isDisable ? `Installed` : `Install Now (${size}MB)`}</button>

                </div>
            </div>
            <div className='border boreder-t border-gray-200 my-3' ></div>
            <Example ratings={ratings}></Example>
            <div className='border boreder-t border-gray-200 my-3' ></div>
            <Description deepDescription={deepDescription} ></Description>
        </div>
    );
};

export default Moredetailsapp;