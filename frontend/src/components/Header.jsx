import React from 'react'
import { FaSearch } from "react-icons/fa";

const Header = () => {
    return (
        <header className='bg-indigo-400 flex justify-between py-4 px-2 items-center max-6xl'>

            <div>
                <h1 className='flex flex-wrap text-4xl'>
                    <div className='text-neutral-700'>EZ</div>
                    <div>Home</div>
                </h1>
            </div>

            <div className='flex items-center bg-white rounded-md p-1'>
                <input type="text" name="text" placeholder="Search..." id="" className='w-24 focus:outline-none p-1  sm:w-64 bg-white text-sm' />
                <FaSearch/>
            </div>
            <div className='flex flex-wrap gap-4 text-lg'>
                <div className='hidden sm:inline hover:underline'>About</div>
                <div className='hidden sm:inline hover:underline'>Profile</div>
                <div className='hover:underline'>Signin</div>
            </div>
        </header>
    )
}

export default Header
