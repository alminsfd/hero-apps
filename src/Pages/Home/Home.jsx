import React from 'react';
import Banner from '../../Component/Banner/Banner';
import State from '../../Component/State/State';
import Topapp from '../../Component/Topapp/Topapp';
import { useLoaderData } from 'react-router';
const Home = () => {
const data =useLoaderData()
    return (
        <div className='my-15' >
            <Banner></Banner>
            <State></State>
            <Topapp data={data} ></Topapp>
        </div>
    );
};

export default Home;