import React from 'react';

const Description = ({deepDescription}) => {
    return (
        <div>
            <h2 className='text-[#001931]  text-2xl font-bold mb-4 ' >Description</h2>
           <p className='text-[#627382]  text-base font-medium' >{deepDescription}</p> 
        </div>
    );
};

export default Description;