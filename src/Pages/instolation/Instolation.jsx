import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLoaderData } from 'react-router';
import { getaddcard } from '../../localstorage/loacalstorage';
import SinglecCardinstall from './SinglecCardinstall';
import { toast } from 'react-toastify';
const Instolation = () => {
    const [sortedCard, setSortedCard] = useState([])
    const [sort, setSort] = useState("")
    const [Installed, setInstalled] = useState(getaddcard())
    const cards = useLoaderData()

    useEffect(() => {
        const installedCard = cards.filter(card => Installed.includes(card.id)) || []
        setSortedCard(installedCard)
    }, [cards,Installed])
    const handleRemove = (id) => {
        const removecard = Installed.filter(remove => remove !== id)
        setInstalled(removecard)
        localStorage.setItem('addlist', JSON.stringify(removecard))
        toast.success('successfully Uninstall complete!')
    }
    const handleShorting = (type) => {
        setSort(type)
        if (type === "descending") {
            const descending = [...sortedCard].sort((a, b) => b.downloads - a.downloads)
            setSortedCard(descending)
        }
        if (type === "ascending") {
            const ascending = [...sortedCard].sort((a, b) => a.downloads - b.downloads)
            setSortedCard(ascending)
        }

    }
    return (
        <div className='max-w-[1400px] mx-auto mt-10' >
            <h2 className='text-center  text-[#001931] font-bold md:text-5xl  text-2xl md:mb-5 mb-2' >Your Installed Apps</h2>
            <p className='text-center text-[#627382] mb-5' >Explore All Trending Apps on the Market developed by us</p>
            <div className='flex flex-col md:flex-row items-center justify-between mb-6' >
                <p className='text-[#001931] font-semibold md:text-2xl text-lg' >Total Installed app ({sortedCard.length})</p>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1">Sort By {sort ? sort : ''}<ChevronDown /></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li className='font-bold' ><a onClick={() => handleShorting("descending")} >   descending download  </a></li>
                        <li className='font-bold' ><a onClick={() => handleShorting("ascending")}  >   ascending  download </a></li>
                    </ul>
                </div>
            </div>
            {
                sortedCard.map(install => <SinglecCardinstall handleRemove={handleRemove} key={install.id} install={install} ></SinglecCardinstall>)
            }

        </div>
    );
};

export default Instolation;