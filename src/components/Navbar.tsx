// import React from 'react'
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
import ImageComponent from "./imageComp"
import logo from '../assets/images/download-1.svg'
import { useState } from "react"


const Navbar = () => {

const [open,setOpen]=useState<boolean>(false)
  return (
<>
{
    open&&(
<div className={`flex flex-col items-center justify-center gap-y-6 w-[80%] h-[280px] absolute z-90 top-[15%] left-[50%] transform -translate-x-[50%] rounded-2xl bg-[rgba(255,255,255,0.1)] shadow-[20px_20px_40px_-6px_rgba(0,0,0,0.4)] backdrop-blur-[50px] transition-all delay-300 duration-300 ease-in-out${open?'opacity-100 ':'opacity-0'}`}>
        <Link to={''} className="text-[15px] inline-block font-poppins">Home</Link>
        <Link to={''} className="text-[15px] inline-block font-poppins">About</Link>
        <Link to={''} className="text-[15px] inline-block font-poppins">Contact</Link>
        <div className="flex flex-col items-center justify-center gap-y-5">
        <Link to={''} className="bg-[#9b87f6] px-4 py-2 rounded-[15px] font-poppins">Signup</Link>
        <Link to={''} className="px-4 py-2 rounded-[15px] border border-[#9b87f6] font-poppins">Login</Link>
    </div>
        </div>
    )
    
}
        

<nav className="w-[100%] pt-6.5 pl-6 flex items-center justify-between">

    <div className=" w-[50px] h-[50px] rounded-[50%] bg-[#e5deff] inline-block p-2 self-start md:ml-11 transition delay-75 duration-300 ease-in-out">
        <ImageComponent alt="logo" src={logo} width="40px" height="40px" className=""/>
    </div>

    <div className="hidden md:flex md:justify-between w-[25%]">
        <Link to={''} className="text-[15px] inline-block font-poppins">Home</Link>
        <Link to={''} className="text-[15px] inline-block font-poppins">About</Link>
        <Link to={''} className="text-[15px] inline-block font-poppins">Contact</Link>
    </div>

    <div className="hidden md:w-[25%] md:flex justify-start items-center">
        <Link to={''} className="bg-[#9b87f6] p-2.5 px-7 rounded-3xl font-poppins">Signup</Link>
        <Link to={''} className="ml-16 p-2.5 px-7 rounded-3xl border border-[#9b87f6] font-poppins">Login</Link>
    </div>
<div className="mr-6.5 md:hidden">
    {!open?(
    <FaBars className="w-[30px] h-[30px]" onClick={()=>!open?setOpen(true):setOpen(false)}/>
    ):(<FaTimes className="w-[30px] h-[30px]" onClick={()=>!open?setOpen(true):setOpen(false)}/>)}
    
</div>        
</nav>

</>
  )
}

export default Navbar