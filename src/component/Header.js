import React from 'react'
import Logo from "../component/Logo"
import { IoSearch } from "react-icons/io5";
import { LuUserCircle2 } from "react-icons/lu";
import { GrCart } from "react-icons/gr";
import { Link } from "react-router-dom";


export const Header = () => {
  return (
   <header className='h-16 shadow-md bg-white'>
    <div className='h-full container mx-auto flex items-center px-4 justify-between'>
      <div className=''>
        <Link to ="/">
        {/* <Logo/> */}
        <h1 className='text-2xl text-red-700 bg-blue-300 rounded'>Yashika</h1>
       

        </Link>
      </div>

      <div className='hidden sm:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
        <input type='text' placeholder='search product here...' className='w-full outline-none'/>
        <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white cursor-pointer'>
        <IoSearch />
        </div>
      </div>

      <div className='flex items-center gap-7'>
        <div className='text-3xl cursor-pointer'>
        <LuUserCircle2 />

        </div>
        
        <div className='text-2xl relative'>
        <snap><GrCart /></snap>
        <div className='bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
          <p className='texr-sm'>0</p>
        </div>
        </div>
        <div>
            <Link to={"/login"} className='px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700'>Login</Link>
          </div>
      </div>
         
    </div>
   </header>
  )
}
