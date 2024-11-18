import React from 'react'
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import {app} from "../firebase.js"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signinSuccess } from '../redux/user/userSlice';

const OAuth = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick =async () =>{
    try {
        const provider = new GoogleAuthProvider();
        const auth = getAuth(app);
        const val = await signInWithPopup(auth, provider)
        const res = await fetch("http://localhost:3006/api/auth/google", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: val.user.displayName,
                email: val.user.email,
                photoURL: val.user.photoURL,
            }),
            credentials: 'include'
        })
        const data = await res.json()
        dispatch(signinSuccess(data))
        navigate("/")
        
    } catch (error) {
        console.log("Could not sign in with google", error);
    }
}
   return (
       <button onClick={handleClick} type="button" className='text-lg bg-blue-400 rounded-md p-2 border hover:opacity-85 font-semibold'>
        Continue With Google
    </button>
  )
}

export default OAuth
