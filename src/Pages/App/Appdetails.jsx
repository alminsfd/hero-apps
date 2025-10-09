import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Singletopapp from '../../Component/Topapp/Singletopapp';
import Loader from '../Loadpage/Loader';
import Apperror from './Apperror/Apperror';


const Appdetails = () => {
    const [loading, setLoading] = useState(false)
    const cards = useLoaderData()
    const [search, setSearch] = useState('')
    const [filter, setfilter] = useState([])
    useEffect(() => {
        setLoading(true)
        const dalay = setTimeout(() => {
            const words = search.trim().toLocaleLowerCase()
            const filterWord = words ? cards.filter(card => card.title.toLocaleLowerCase().includes(words)) : cards
            setfilter(filterWord)
            setLoading(false)
        }, 50);
        return () => clearTimeout(dalay)
    }, [search, cards])


    return (
        <>
            <div className='mt-10 max-w-[1400px] mx-auto ' >
                <h1 className='font-bold md:text-5xl  text-2xl text-[#001931] text-center mb-3' >Our All Applications</h1>
                <p className='text-[#627382] md:text-xl  text-base  text-center  font-medium ' >Explore All Apps on the Market developed by us. We code for Millions</p>
                <div className='flex  flex-col md:flex-row items-center justify-between mt-10 ' >
                    <span className='text-[#001931] font-semibold md:text-3xl text-base ' >({filter.length})App found</span>
                    <label className="input mt-4">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input onChange={(e) => setSearch(e.target.value)} type="search" required placeholder="Search" />
                    </label>
                </div>
                {
                    loading ? <Loader></Loader> : ""
                }

                {
                    filter.length <= 0 ? <Apperror></Apperror> : <div className='grid md:grid-cols-4 grid-cols-1 gap-5 cursor-pointer mt-15' >
                        {
                            (filter.map(card => <Singletopapp key={card.id} card={card} ></Singletopapp>))
                        }
                    </div>
                }


            </div>
        </>


    );
};

export default Appdetails;

