import React from "react"
import { BrowserRouter, Route, Routes} from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Header from "./components/Header"
function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path ="/profile" element={<Profile/>}/>
          <Route path ="/signin" element={<Signin/>}/>
          <Route path ="/signup" element={<Signup/>}/>
          </Routes> 
    </BrowserRouter>
    </>
  )
}

export default App
