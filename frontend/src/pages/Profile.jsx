import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const {currentUser} = useSelector((state)=>state.user)
  return (
    <div className='p-3 max-w-lg mx-auto mt-4'>
      <h2 className='text-center text-3xl font-semibold '>Profile</h2> 
           
      <form className='flex flex-col gap-4 mt-4'>
        <img src={currentUser.avatar} className='rounded-full w-24 h-24 self-center object-cover my-4 cursor-pointer' referrerPolicy="no-referrer"/>
          <input type = "text" defaultValue={currentUser.username} id="username" className='p-2 border rounded-md focus:outline-none'/>
          <input type="text" defaultValue={currentUser.email} id="username" className="focus:outline-none border rounded-md p-2"/>
          <button type="button" className='mt-4 bg-stone-400 p-4 rounded-md font-semibold text-lg hover:opacity-85'>
            Submit
          </button>
        </form>
        <div className='flex justify-between mt-4'>
          <div className='text-red-600 font-semibold hover:opacity-85 hover:underline'> Delete Account?</div>
        <div className='font-semibold hover:opacity-85 hover:underline '>Signout</div>
        </div>
    </div>
  )
}

export default Profile
