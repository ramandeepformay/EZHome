import React, { useEffect, useState } from 'react'
import Spinner from '../assets/spinner'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signinStart, signinFailue, clearError, signinSuccess } from '../redux/user/userSlice'
import OAuth from '../components/OAuth'

const Signin = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [val, setVal] = useState({ email: "", password: "" })
  const {loading, error} = useSelector((state)=>state.user)
   
  useEffect(() => {
    dispatch(clearError()); 
  }, [dispatch]);

  const handleChange = (e) => {
    setVal({ ...val, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {

    try {
      e.preventDefault()
      dispatch(signinStart())
      const res = await fetch("http://localhost:3006/api/auth/signin", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(val),
        credentials: 'include'
      
      })

      const dataResponse = await res.json()
      if (dataResponse.success === false) {
        dispatch(signinFailue(dataResponse.message))
        setVal({ email: "", password: "" })
        return;
      }
      dispatch(signinSuccess(dataResponse))
      setVal({ email: "", password: "" })
      navigate("/home")

    } catch (e) {
      dispatch(signinFailue(dataResponse.message))

    }
  }

  return (
    <div className='w-3/4 sm:max-w-lg mx-auto p-2'>
      <div className='text-center my-7 font-semibold text-2xl'>
        <h2>Sign in</h2>
      </div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 '>
        <input type="email" placeholder="Email" className='p-2 rounded-md border focus:outline-none shadow-sm' id="email"
          value={val.email}
          onChange={handleChange} />
        <input type="password" placeholder="Password" className='p-2 rounded-md border  focus:outline-none shadow-sm' id="password"
          value={val.password}
          onChange={handleChange} />
        <button className='text-lg bg-neutral-400 rounded-md p-2 border hover:opacity-85 font-semibold'>
          <div className='flex justify-center items-center'>
            <div>Sign in</div>
            <div>{loading ? <Spinner /> : null}</div>
          </div>
        </button>
        <OAuth/>
      </form>
      <div className='flex justify-center gap-2 my-2'>

        <div> Have an Account? </div>
        <Link to={"/signup"}>
          <div className='font-semibold hover:opacity-75 cursor-pointer underline'>Signup</div>
        </Link>
      </div>
      <div>
       { console.log(error)}
        {error && <p className='text-red-500 text-center'>{error}</p>}
      </div>
    </div>
  )
}

export default Signin
