import React from 'react'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='bg-indigo-400 flex flex-wrap justify-between items-center p-4'>
            <Link to="/Home">
                <div>
                    <h1 className='flex flex-wrap text-4xl'>
                        <div className='text-neutral-700'>EZ</div>
                        <div>Home</div>
                    </h1>
                </div>
            </Link>

            <div className='flex items-center bg-white rounded-md p-1'>
                <input type="text" name="text" placeholder="Search..." id="" className='w-24 focus:outline-none p-1  sm:w-64 bg-white text-sm' />
                <FaSearch />
            </div>

            <div className='flex flex-wrap gap-4 text-lg'>
                <Link to ="/about">
                    <div className='hidden sm:inline hover:underline'>About</div>
                </Link>
                <Link to ="/Profile">
                    <div className='hidden sm:inline hover:underline'>Profile</div>
                </Link>
                <Link to ="/Signin">
                    <div className='hover:underline'>Signin</div>
                </Link> 
            </div>
        </header>
    )
}

export default Header
