import React from 'react'

const Signup = () => {
  return (
    <div className='w-3/4 sm:max-w-lg mx-auto p-2'>
      <div className='text-center my-7 font-semibold text-2xl'>
        <h2>Sign Up</h2>
      </div>
      <form className='flex flex-col gap-4 '>
        <input type="text" placeholder="Username" className='p-2 rounded-md border focus:outline-none shadow-sm' />
        <input type="email" placeholder="Email" className='p-2 rounded-md border focus:outline-none shadow-sm' />
        <input type="text"  placeholder="Password" className='p-2 rounded-md border  focus:outline-none shadow-sm' />
        <button className='text-lg bg-neutral-400 rounded-md p-2 border uppercase hover:opacity-85 font-semibold'>Sign up</button>
      </form>
      <div className='flex justify-center gap-2 my-2'>
        <div> Have an Account? </div>
        <div className='font-semibold hover:opacity-75 cursor-pointer'>Signin</div>
      </div>
    </div>
  )
}

export default Signup
