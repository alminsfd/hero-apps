import React from 'react';
import error from '../../../assets/App-Error.png';
import { Link } from 'react-router';
import Header from '../../../Component/Header/Header';
import Footer from '../../../Component/Footer/Footer';

const Apperror = () => {
    return (
        <>
            
            <div>
                <div className='flex flex-col justify-center items-center mt-10 ' >
                    <img src={error} alt="" />
                    <h2 className='font-semibold md:text-5xl text-2xl mb-3 text-[#001931]  mt-5 ' >OPPS!! APP NOT FOUND</h2>
                    <p className='text-[#627382]  text-xl mb-3 text-center' >The App you are requesting is not found on our system.  please try another apps</p>
                    <Link to={-1} >
                        <button className=' btn font-bold text-lg  bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white p-2 rounded-lg cursor-pointer'>Go Back!</button>
                    </Link>
                </div>
            </div>
            


        </>
    );
};

export default Apperror;