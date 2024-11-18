import React from 'react'
import { FaSearch } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Header = () => {

    const { currentUser } = useSelector((state) => state.user)
    console.log(currentUser)
    return (
        <header className='bg-stone-400 flex flex-wrap justify-between items-center py-4 px-2 max-w-8xl mx-auto shadow-lg'>
            <Link to="/">
                <div>
                    <h1 className='flex flex-wrap text-2xl sm:text-4xl'>
                        <div className='text-neutral-600'>EZ</div>
                        <div>Home</div>
                    </h1>
                </div>
            </Link>

            <div className='flex items-center justify-center bg-white rounded-md p-1 sm:p-2 shadow-md'>
                <input type="text" name="text" placeholder="Search..." id="" className='w-24 focus:outline-none sm:w-48 bg-white text-sm ml-2' />
                <FaSearch />
            </div>

            <div className='flex flex-wrap gap-4 text-lg font-semibold'>
                <Link to="/about">
                    <div className='hidden sm:inline hover:underline'>About</div>
                </Link>
                <Link to="/profile">
                    <div className='hidden sm:inline hover:underline'>Profile</div>
                </Link>
                <Link to="/profile">
                    {currentUser && currentUser.avatar?
                        (<img src={currentUser.avatar} alt="avatar" referrerPolicy="no-referrer" className='rounded-full w-8 h-8 object-cover cursor-pointer' />)
                        :
                        (
                        <div className='hover:underline'>Signin</div>)}
                </Link>
            </div>
        </header>
    )
}

export default Header
// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const Header = () => {
//     const { currentUser } = useSelector((state) => state.user);
//     console.log("Current User:", currentUser);

//     return (
//         <header className="bg-stone-400 flex flex-wrap justify-between items-center py-4 px-2 max-w-8xl mx-auto shadow-lg">
//             <Link to="/">
//                 <div>
//                     <h1 className="flex flex-wrap text-2xl sm:text-4xl">
//                         <div className="text-neutral-600">EZ</div>
//                         <div>Home</div>
//                     </h1>
//                 </div>
//             </Link>

//             <div className="flex items-center gap-4 text-lg font-semibold">
//                 <Link to="/profile">
//                     {currentUser && currentUser.avatar? (
//                         <img
//                             src={currentUser.avatar || "/path/to/default-avatar.png"}
//                             alt="Avatar"
//                             className="rounded-full w-8 h-8 object-cover cursor-pointer"
//                         />
//                     ) : (
//                         <div className="hover:underline">Signin</div>
//                     )}
//                 </Link>
//             </div>
//         </header>
//     );
// };

// export default Header;
