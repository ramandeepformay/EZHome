import React from 'react'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='bg-stone-400 flex flex-wrap justify-between items-center p-4 max-w-8xl mx-auto shadow-lg'>
            <Link to="/Home">
                <div>
                    <h1 className='flex flex-wrap text-2xl sm:text-4xl'>
                        <div className='text-neutral-600'>EZ</div>
                        <div>Home</div>
                    </h1>
                </div>
            </Link>

            <div className='flex items-center bg-white rounded-md p-1 sm:p-2 shadow-md'>
                <input type="text" name="text" placeholder="Search..." id="" className='w-24 focus:outline-none sm:w-64 bg-white text-sm ml-2' />
                <FaSearch />
            </div>

            <div className='flex flex-wrap gap-4 text-lg font-semibold'>
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
