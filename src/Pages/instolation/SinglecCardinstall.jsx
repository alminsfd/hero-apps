import React from 'react';
import { ArrowDownToLine, Star } from 'lucide-react';
const SinglecCardinstall = ({install,handleRemove}) => {
    const {image,title,id,
description,size,ratingAvg,downloads

     } =install

    return (
        <>
            <div className='border border-[#ddd] shadow-sm p-5 rounded-xl justify-between  gap-5 flex  flex-col md:flex-row mb-5'>
                <div  className='flex flex-col md:flex-row items-center gap-2 ' >
                    <img className='size-[60px] ' src={image} alt="" />
                <div  >
                    <h3 className='text-[#001931] md:text-xl text-base  font-normal  ' ><span className='font-semibold' >{title}:</span> {description}</h3>
                    <div className='flex justify-between items-center ' >
                        <div className='flex  items-center mt-2 ' >
                            <p className='flex mr-5 text-[#00D390] font-medium '><ArrowDownToLine className='mr-1' />{downloads}</p>
                            <p className='flex mr-5 text-[#FF8811] font-medium '><Star className='mr-1' />{ratingAvg}</p>
                            <p className='mr-5 text-[#627382] ' >{size} MB</p>
                        </div>
                    </div>
                </div>
                </div>
                <button onClick={()=>handleRemove(id)} className='text-white font-semibold text-base rounded-lg btn bg-[#00D390]'>Uninstall</button>
            </div>
        </>
    );
};

export default SinglecCardinstall;