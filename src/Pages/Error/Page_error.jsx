import React from 'react';
import error from '../../assets/error-404.png';
import { Link } from 'react-router';
import Header from '../../Component/Header/Header';
import Footer from '../../Component/Footer/Footer';

const Page_error = () => {
    return (
        <>
            <Header></Header>
            <div className='flex flex-col justify-center items-center ' >
                <img src={error} alt="" />
                <h2 className='font-semibold md:text-5xl text-2xl mb-3 text-[#001931]  mt-5  ' >Oops, page not found!</h2>
                <p className='text-[#627382]  text-xl mb-3 ' >The page you are looking for is not available.</p>
                <Link to={-1} >
                    <button className=' btn font-bold text-lg  bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white p-2 rounded-lg cursor-pointer'>Go Back!</button>
                </Link>
            </div>
            <Footer></Footer>
        </>

    );
};
export default Page_error;