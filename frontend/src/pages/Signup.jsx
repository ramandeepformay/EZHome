import React, { useState } from 'react'
import Spinner from '../assets/spinner'
import { useNavigate, Link } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [val, setVal] = useState({ email: "", username: "", password: "" })
  const handleChange = (e) => {
    setVal({ ...val, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      setLoading(true)
      const res = await fetch("http://localhost:3006/api/auth/signup", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(val)
      })
      const dataResponse = await res.json()
      if (dataResponse.success === false) {
        setLoading(false)
        setError(dataResponse.message)
        setVal({ email: "", password: "", username: "" })
        return;
      }
      setLoading(false)
      setError(null)
      setVal({ email: "", password: "", username: "" })
      navigate("/signin")

    } catch (e) {
      setLoading(false)
      setError(dataResponse.message)
    }

  }

  return (
    <div className='w-3/4 sm:max-w-lg mx-auto p-2'>
      <div className='text-center my-7 font-semibold text-2xl'>
        <h2>Sign Up</h2>
      </div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 '>
        <input type="text" placeholder="Username" className='p-2 rounded-md border focus:outline-none shadow-sm' id="username"
          value={val.username}
          onChange={handleChange} />
        <input type="email" placeholder="Email" className='p-2 rounded-md border focus:outline-none shadow-sm' id="email"
          value={val.email}
          onChange={handleChange} />
        <input type="password" placeholder="Password" className='p-2 rounded-md border  focus:outline-none shadow-sm' id="password"
          value={val.password}
          onChange={handleChange} />
        <button className='text-lg bg-neutral-400 rounded-md p-2 border uppercase hover:opacity-85 font-semibold'>
          <div className='flex justify-center items-center'>
            <div>SIGN UP </div>
            <div>{loading ? <Spinner /> : null}</div>
          </div>
        </button>
      </form>

      <div className='flex justify-center gap-2 my-2'>
        <div> Have an Account? </div>
        <Link to={"/signin"}>
          <div className='font-semibold hover:opacity-75 cursor-pointer underline'>Sign in</div>
        </Link>
      </div>
      <div>
        {error && <p className='text-red-500 text-center'>{error}</p>}
      </div>
    </div>
  )
}

export default Signup
